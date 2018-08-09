/*
* @Author: Administrator
* @Date:   2018-08-03 09:36:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-07 18:38:38
*/
class game{
	constructor(header,life,score,replay,text,end,kai,guan){
		this.header=header
		this.life=life
		this.score=score
		this.replay=replay
		this.text=text
		this.end=end
		this.kai=kai
		this.guan=guan
		this.conbox=[]
		this.speed=''
		console.log(end)
		// console.log(life.innerText)
		// this.score.innerText=0
		// this.life.innerText=10
	}


	createlatter(m=1){
		// console.log(this.life.innerText)
		for(let i=0;i<m;i++){
			let con={}
			let letter=''
			do{
				let asc=Math.floor(Math.random()*26+65)
				letter=String.fromCharCode(asc)
			}while(this.issame(letter))
			con.name=letter
			let div=document.createElement('div')
			div.className='letter'
			div.style.backgroundImage=`url(img/A_Z/${letter}.png)`
			let left=''
			do{
				left=Math.random()*5.7+0.6
			}while(this.repeat(left))
			
			div.style.left=left+'rem'
			con.left=left
			con.top=1
			con.node=div
			this.header.appendChild(div)
			this.conbox.push(con)
		}
		
	}
	issame(letter){
		for(let item of this.conbox){
			if(letter==item.name){
				return true
			}
		}
		return false
	}
	repeat(left){
		for(let item of this.conbox){
			if(Math.abs(left-item.left)<0.52){
				return true
			}
		}
		return false
	}

	moren(){
		this.life.innerText=10
		this.score.innerText=0
		
		this.speed=0.1
		this.end.style.display='none'
		this.kai.style.display='none'	
		this.guan.style.display='block'
		this.createlatter(5)
		
	}

	pause(){
		clearInterval(this.t)
	}

	
	down(){
		this.t=setInterval(()=>{
			
			this.conbox.forEach((item,index)=>{	
				item.top+=this.speed
				if(item.top>7.94){
					this.header.removeChild(item.node)
					this.conbox.splice(index,1)
					this.createlatter()
					this.life.innerText--
					if(this.life.innerText<=0){
						this.end.style.display='block'
						this.text.innerText=this.score.innerText
						clearInterval(this.t)
						this.conbox=[]
						this.header.innerText=''
					}
				}
				item.node.style.top=item.top+'rem'
			})
		},100)
	}


	delkey(name){

		this.conbox.forEach((item,index)=>{
			if(item.name==name){
				this.header.removeChild(item.node)
				this.conbox.splice(index,1)
				this.createlatter()
				this.score.innerText++
				this.jiasu()
			}
		})
	}
	jiasu(){
		this.speed=this.score.innerText<10?0.1:this.score.innerText/100
		
	}
}