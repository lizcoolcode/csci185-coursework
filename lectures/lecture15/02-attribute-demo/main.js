/* 
cat:  https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg
dog:  https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg
bird: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg
fish: https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg'
*/


function showCat() {
    document.querySelector('#image-demo').src = "https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    console.log('update the image to show a cat!');
};

function showDog() {
    document.querySelector('#image-demo').src = "https://www.dogfoodadvisor.com/wp-content/uploads/2019/10/Puppy-for-DFA-Dog-Food-Recall-Card-500x333.jpg"
    console.log('update the image to show a dog!');
};

function showBird() {
    document.querySelector('#image-demo').src = "https://www.umc.org/-/media/umc-media/2022/07/06/21/56/pigeons-holy-spirit.ashx?h=768&la=en&mh=768&mw=1152&w=1152&hash=88FC33A628D652CDF081B07A15CB8569928CF51B"
    console.log('update the image to show a bird!');
};

function showFish() {
    document.querySelector('#image-demo').src = "https://i.insider.com/57a4db38dd089551028b465b?width=1136&format=jpeg"
    console.log('update the image to show a fish!');
};

