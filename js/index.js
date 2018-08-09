/*
* @Author: Administrator
* @Date:   2018-08-03 09:36:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-07 18:36:14
*/
window.onload=function(){
	let music=document.querySelector('.music')
	let nomusic=document.querySelector('.nomusic')
	let btn=document.querySelectorAll('.btn')
	let kai=document.querySelector('.kai')
	let guan=document.querySelector('.guan')
	let header=document.querySelector('header')
	let life=document.querySelector('.life')
	let score=document.querySelector('.score')
	let end=document.querySelector('.end')
	let text=document.querySelector('.end .text')
	let replay=document.querySelector('.end .replay')
	let audio=document.querySelector('audio')
	let flag=false
	btn.forEach(function(e){
		e.ontouchstart=function(){
		if(!flag){
			return
		}
		e.style.transform=`scale(${0.8})`
		gm.delkey(e.innerText)

	}
		e.ontouchend=function(){
			e.style.transform=`scale(${1})`
		}
	})


	music.onclick=function(){
		music.style.display='none'
		nomusic.style.display='block'
		audio.pause()
	}
	nomusic.onclick=function(){
		nomusic.style.display='none'
		music.style.display='block'
		audio.play()
	}

	kai.onclick=function(){
		kai.style.display='none'
		guan.style.display='block'
		gm.pause()
		flag=false
	}
	guan.onclick=function(){
		guan.style.display='none'
		kai.style.display='block'
		gm.down()
		flag=true
	}
	replay.onclick=function(){

		gm.moren()

	}
	
	

	let gm=new game(header,life,score,replay,text,end,kai,guan)
	
	gm.moren()
	gm.pause()
}