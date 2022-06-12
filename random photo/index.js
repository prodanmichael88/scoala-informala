
        
        
        
function getPhoto(){

        let selectedItem = document.querySelector('select').value;
        console.log(selectedItem);
        
        let myImage = document.querySelector('img');
        
        let rootDog = 'https://random.dog/woof.json'
        let rootCat = 'https://api.thecatapi.com/v1/images/search';
        let rootFox = 'https://randomfox.ca/floof/'

        if(selectedItem=='dog'){
                fetchData(rootDog,myFdog)
        }else if(selectedItem=='cat'){
                fetchData(rootCat,myFcat)
        }else{
                fetchData(rootFox,myFfox)
        }

        function myFcat(data){
                return data[0].url
        }
        function myFdog(data){
                return data.url
        }
        function myFfox(data){
                return data.image
        }
        
        function fetchData(root,func){

        fetch(root).then(response => response.json()).then(data => {
                
                myImage.src = func(data);
                myImage.alt = 'Image is missing';
        })

        }
        
        
        
        

        
    

// if(selectedItem ==='dog'){
    
//     fetch('https://random.dog/woof.json',{ method: 'GET'})
//     .then(function(data){
//         return data.json();})
//     .then(function(data) {
//             myImage.src=data.url;
//             myImage.alt='Image is missing';
//     })
// }else if(selectedItem ==='fox'){

//     fetch('https://randomfox.ca/floof/',{ method: 'GET'})
//     .then(function(data){
//         return data.json();})
//     .then(function(data) {
//         myImage.src=data.image;
//         myImage.alt='Image is missing';
// })
// }else{
//     fetch('https://api.thecatapi.com/v1/images/search',{method:'GET'})
//     .then(function(data){
//         return data.json();})
//     .then(function(data){
//         myImage.src=data[0].url
//         myImage.alt='Image is missing';
//     })
//     }  
//}
}
// function myObject(type){
// var myObj = {
//                 'cat': fetchData(rootCat,myFcat),
//                 'dog': fetchData(rootDog,myFdog),
//                 'fox': fetchData(rootFox,myFfox)
//         }
// }


