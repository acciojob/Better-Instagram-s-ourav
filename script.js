//your code here
images= Array.from(document.getElementsByClassName('image'))
// console.log(images);
images.forEach((img) =>{
	img.addEventListener('dragstart',(event)=>{
		console.log("dragged");
		event.dataTransfer.setData('text/plain',img.id)
	})
	img.addEventListener('dragover',(event)=>{
		event.preventDefault();
	})
	img.addEventListener('drop',(event)=>{
		event.preventDefault()
		// console.log("dropped")
		const parent= img.parentNode;
		const draggedEleId= event.dataTransfer.getData('text/plain')
		const draggedEle=document.getElementById(draggedEleId)

		const imgidx=Array.from(parent.children).indexOf(img)
		const drageleidx=Array.from(parent.children).indexOf(draggedEle)

		parent.insertBefore(draggedEle,parent.children[imgidx])
		parent.insertBefore(img,parent.children[drageleidx])
		
	})
})