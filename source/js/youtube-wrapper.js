// Include YouTube player api
var tag = document.createElement('script')
tag.src = "https://www.youtube.com/player_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

function onYouTubePlayerAPIReady() {
  (new TheWayOfLife("youtube-player")).initialize()
}
