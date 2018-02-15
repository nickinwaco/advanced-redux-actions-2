import React from 'react';

function VideoPlayer(props) {
  let width = 200;
  let height = 200;
  // let url = "'https://www.youtube.com/watch?v=VH-LFiYdxNY'"
  if(props.scale){
    width = 200 * props.scale;
    height = 200 * props.scale;
  }
  return (
      <div><iframe title="YouTube video player"  type="text/html"
      width={width} height={height} src={props.url}
      frameBorder="0" allowFullScreen> YouTube</iframe></div>
  );
}
export default VideoPlayer;
