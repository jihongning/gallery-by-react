require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
//获取图片相关的数据
let imageDatas=require("../data/imageDatas.json");
//利用自执行函数，将图片信息转成图片的URL路径信息
function genImageURL(imageDatasArr){
	for(let i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageDate=imageDatasArr[i];
        singleImageDate.imageURL=require('../images/'+singleImageDate.fileName);
        imageDatasArr[i]=singleImageDate;
	}
	return imageDatasArr;
}
imageDatas=genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;