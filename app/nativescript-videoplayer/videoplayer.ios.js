"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var videoplayer_common_1 = require("./videoplayer-common");
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        var _this = _super.call(this) || this;
        _this._src = '';
        _this._videoFinished = false;
        _this.videoLoaded = false;
        _this._playerController = AVPlayerViewController.new();
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'this._playerController', _this._playerController);
        _this.player = AVPlayer.new();
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'this.player', _this.player);
        _this._playerController.player = _this.player;
        _this._playerController.showsPlaybackControls = false;
        _this.nativeView = _this._playerController.view;
        _this._observer = PlayerObserverClass.alloc().init();
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'this._observer', _this._observer);
        _this._observer['_owner'] = _this;
        _this._observer.owner = _this;
        return _this;
    }
    Object.defineProperty(Video.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype[videoplayer_common_1.headersProperty.setNative] = function (value) {
        this._setHeader(value ? value : null);
    };
    Video.prototype[videoplayer_common_1.videoSourceProperty.setNative] = function (value) {
        this._setNativeVideo(value ? value.ios : null);
    };
    Video.prototype._setHeader = function (headers) {
        var _this = this;
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._setHeader ---', "headers: " + headers);
        if (headers && headers.size > 0) {
            this._headers = new NSMutableDictionary();
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, "Video._setHeader ---", "this._headers: " + this._headers);
            headers.forEach(function (value, key) {
                _this._headers.setValueForKey(value, key);
            });
        }
        if (this._src) {
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._setHeader ---', "this._src: " + this._src);
            this._setNativePlayerSource(this._src);
        }
    };
    Video.prototype._setNativeVideo = function (nativeVideoPlayer) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._setNativeVideo ---', "nativeVideoPlayer: " + nativeVideoPlayer);
        if (this._url && this._headers && this._headers.count > 0) {
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.warning, 'Need to add headers!');
            var url = NSURL.URLWithString(this._url);
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._setNativeVideo ---', "url: " + url);
            var options = NSDictionary.dictionaryWithDictionary({
                AVURLAssetHTTPHeaderFieldsKey: this._headers
            });
            var asset = AVURLAsset.alloc().initWithURLOptions(url, options);
            var item = AVPlayerItem.playerItemWithAsset(asset);
            nativeVideoPlayer = item;
        }
        if (nativeVideoPlayer != null) {
            var currentItem = this.player.currentItem;
            this._addStatusObserver(nativeVideoPlayer);
            this._autoplayCheck();
            this._videoFinished = false;
            if (currentItem !== null) {
                this.videoLoaded = false;
                this._videoPlaying = false;
                this._removeStatusObserver(currentItem);
                this.player.replaceCurrentItemWithPlayerItem(null);
                this.player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
            }
            else {
                this.player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
                this._init();
            }
        }
    };
    Video.prototype.updateAsset = function (nativeVideoAsset) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.updateAsset ---', "nativeVideoAsset: " + nativeVideoAsset);
        var newPlayerItem = AVPlayerItem.playerItemWithAsset(nativeVideoAsset);
        this._setNativeVideo(newPlayerItem);
    };
    Video.prototype._setNativePlayerSource = function (nativePlayerSrc) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._setNativePlayerSource ---', "nativePlayerSrc: " + nativePlayerSrc);
        this._src = nativePlayerSrc;
        var url = NSURL.URLWithString(this._src);
        this.player = AVPlayer.new();
        this._init();
    };
    Video.prototype.play = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.play');
        if (this._videoFinished) {
            this._videoFinished = false;
            this.seekToTime(5);
        }
        if (this.observeCurrentTime && !this._playbackTimeObserverActive) {
            this._addPlaybackTimeObserver();
        }
        this.player.play();
        this.sendEvent(videoplayer_common_1.VideoCommon.playbackStartEvent);
    };
    Video.prototype.pause = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.pause()');
        this.player.pause();
        this.sendEvent(videoplayer_common_1.VideoCommon.pausedEvent);
        if (this._playbackTimeObserverActive) {
            this._removePlaybackTimeObserver();
        }
    };
    Video.prototype.mute = function (mute) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.mute ---', "mute: " + mute);
        this.player.muted = mute;
        if (mute === true) {
            this.sendEvent(videoplayer_common_1.VideoCommon.mutedEvent);
        }
        else {
            this.sendEvent(videoplayer_common_1.VideoCommon.unmutedEvent);
        }
    };
    Video.prototype.seekToTime = function (ms) {
        var _this = this;
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.seekToTime ---', "ms: " + ms);
        var seconds = ms / 1000.0;
        var time = CMTimeMakeWithSeconds(seconds, this.player.currentTime().timescale);
        this.player.seekToTimeToleranceBeforeToleranceAfterCompletionHandler(time, kCMTimeZero, kCMTimeZero, function (isFinished) {
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, "Video.seekToTime ---", 'emitting seekToTimeCompleteEvent');
            _this.sendEvent(videoplayer_common_1.VideoCommon.seekToTimeCompleteEvent, { time: ms });
        });
    };
    Video.prototype.getDuration = function () {
        var seconds = CMTimeGetSeconds(this.player.currentItem.asset.duration);
        var milliseconds = seconds * 1000.0;
        return milliseconds;
    };
    Video.prototype.getCurrentTime = function () {
        if (this.player === null) {
            return false;
        }
        var result = this.player.currentTime().value / this.player.currentTime().timescale * 1000;
        return result;
    };
    Video.prototype.setVolume = function (volume) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.setVolume ---', "volume: " + volume);
        this.player.volume = volume;
        this.sendEvent(videoplayer_common_1.VideoCommon.volumeSetEvent);
    };
    Video.prototype.destroy = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.destroy');
        this._removeStatusObserver(this.player.currentItem);
        if (this._didPlayToEndTimeActive) {
            application.ios.removeNotificationObserver(this._didPlayToEndTimeObserver, AVPlayerItemDidPlayToEndTimeNotification);
            this._didPlayToEndTimeActive = false;
        }
        if (this._playbackTimeObserverActive) {
            this._removePlaybackTimeObserver();
        }
        this.pause();
        this.player.replaceCurrentItemWithPlayerItem(null);
        this._playerController = null;
        this.player = null;
    };
    Video.prototype._init = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._init');
        if (this.controls !== false) {
            this._playerController.showsPlaybackControls = true;
        }
        this._playerController.player = this.player;
        if (isNaN(parseInt(this.width.toString(), 10)) || isNaN(parseInt(this.height.toString(), 10))) {
            this.requestLayout();
        }
        if (this.muted === true) {
            this.player.muted = true;
        }
        if (!this._didPlayToEndTimeActive) {
            this._didPlayToEndTimeObserver = application.ios.addNotificationObserver(AVPlayerItemDidPlayToEndTimeNotification, this.AVPlayerItemDidPlayToEndTimeNotification.bind(this));
            this._didPlayToEndTimeActive = true;
        }
    };
    Video.prototype.AVPlayerItemDidPlayToEndTimeNotification = function (notification) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.AVPlayerItemDidPlayToEndTimeNotification ---', "notification: " + notification);
        if (this.player.currentItem && this.player.currentItem === notification.object) {
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video.AVPlayerItemDidPlayToEndTimeNotification ---', 'emmitting finishedEvent');
            this.sendEvent(videoplayer_common_1.VideoCommon.finishedEvent);
            this._videoFinished = true;
            if (this.loop === true && this.player !== null) {
                this.player.seekToTime(CMTimeMake(5, 100));
                this.player.play();
            }
        }
    };
    Video.prototype._addStatusObserver = function (currentItem) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._addStatusObserver ---', "currentItem: " + currentItem);
        this._observerActive = true;
        currentItem.addObserverForKeyPathOptionsContext(this._observer, 'status', 0, null);
    };
    Video.prototype._removeStatusObserver = function (currentItem) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._removeStatusObserver ---', "currentItem: " + currentItem);
        this._observerActive = false;
        currentItem.removeObserverForKeyPath(this._observer, 'status');
    };
    Video.prototype._addPlaybackTimeObserver = function () {
        var _this = this;
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._addPlaybackTimeObserver');
        this._playbackTimeObserverActive = true;
        var _interval = CMTimeMake(1, 5);
        this._playbackTimeObserver = this.player.addPeriodicTimeObserverForIntervalQueueUsingBlock(_interval, null, function (currentTime) {
            var _seconds = CMTimeGetSeconds(currentTime);
            var _milliseconds = _seconds * 1000.0;
            videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, "Video._addPlaybackTimeObserver ---", 'emitting currentTimeUpdatedEvent');
            _this.notify({
                eventName: videoplayer_common_1.VideoCommon.currentTimeUpdatedEvent,
                object: _this,
                position: _milliseconds
            });
        });
    };
    Video.prototype._removePlaybackTimeObserver = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._removePlaybackTimeObserver');
        this._playbackTimeObserverActive = false;
        this.player.removeTimeObserver(this._playbackTimeObserver);
    };
    Video.prototype._autoplayCheck = function () {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'Video._autoplayCheck ---', "this.autoplay " + this.autoplay);
        if (this.autoplay) {
            this.play();
        }
    };
    Video.prototype.playbackReady = function () {
        this.videoLoaded = true;
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, "Video.playbackReady ---", 'emitting playbackReadyEvent');
        this.sendEvent(videoplayer_common_1.VideoCommon.playbackReadyEvent);
    };
    Video.prototype.playbackStart = function () {
        this._videoPlaying = true;
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, "Video.playbackStart ---", 'emitting playbackStartEvent');
        this.sendEvent(videoplayer_common_1.VideoCommon.playbackStartEvent);
    };
    return Video;
}(videoplayer_common_1.VideoCommon));
exports.Video = Video;
var PlayerObserverClass = (function (_super) {
    __extends(PlayerObserverClass, _super);
    function PlayerObserverClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerObserverClass.prototype.observeValueForKeyPathOfObjectChangeContext = function (path, obj, change, context) {
        videoplayer_common_1.CLog(videoplayer_common_1.CLogTypes.info, 'PlayerObserverClass.observeValueForKeyPathOfObjectChangeContext ---', "path: " + path + ", obj: " + obj + ", change: " + change + ", context: " + context);
        if (path === 'status') {
            var owner = this.owner;
            if (owner.player && owner.player.currentItem.status === 1 && !owner.videoLoaded) {
                owner.playbackReady();
            }
        }
    };
    return PlayerObserverClass;
}(NSObject));
//# sourceMappingURL=videoplayer.ios.js.map