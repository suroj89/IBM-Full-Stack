let data=[
{
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 49.99,
    "rating": 4.5,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 2,
    "name": "Gaming Mouse",
    "category": "Electronics",
    "price": 29.99,
    "rating": 4.2,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 3,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 79.99,
    "rating": 4.7,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 4,
    "name": "Smartwatch",
    "category": "Wearable",
    "price": 199.99,
    "rating": 4.8,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 5,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.99,
    "rating": 4.3,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 6,
    "name": "Leather Wallet",
    "category": "Fashion",
    "price": 19.99,
    "rating": 4.0,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 7,
    "name": "Digital Camera",
    "category": "Electronics",
    "price": 349.99,
    "rating": 4.6,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 8,
    "name": "Backpack",
    "category": "Accessories",
    "price": 39.99,
    "rating": 4.4,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 9,
    "name": "Sunglasses",
    "category": "Fashion",
    "price": 24.99,
    "rating": 4.1,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 10,
    "name": "Water Bottle",
    "category": "Home & Kitchen",
    "price": 14.99,
    "rating": 4.2,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 11,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 59.99,
    "rating": 4.5,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 12,
    "name": "Electric Kettle",
    "category": "Home & Kitchen",
    "price": 34.99,
    "rating": 4.6,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 13,
    "name": "Portable Power Bank",
    "category": "Electronics",
    "price": 39.99,
    "rating": 4.3,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 14,
    "name": "Smart LED Bulb",
    "category": "Home & Kitchen",
    "price": 19.99,
    "rating": 4.7,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 15,
    "name": "Noise Cancelling Earbuds",
    "category": "Electronics",
    "price": 89.99,
    "rating": 4.8,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 16,
    "name": "Travel Pillow",
    "category": "Accessories",
    "price": 22.99,
    "rating": 4.2,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 17,
    "name": "Yoga Mat",
    "category": "Fitness",
    "price": 29.99,
    "rating": 4.5,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 18,
    "name": "Men's Wrist Watch",
    "category": "Fashion",
    "price": 129.99,
    "rating": 4.6,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 19,
    "name": "Wireless Charger",
    "category": "Electronics",
    "price": 27.99,
    "rating": 4.3,
    "image": "https://via.placeholder.com/150"
},
{
    "id": 20,
    "name": "Graphic T-Shirt",
    "category": "Fashion",
    "price": 19.99,
    "rating": 4.1,
    "image": "https://via.placeholder.com/150"
}
]


function showData(array){
    arr.forEach((el,index)=>{

        let box =document.createElement("div");
        box.classNmae="parentBox"
        box.style.border="1px solid grey"
        box.style.width="300px"
    
        let h2=document.createElement("h2")
        h2.innerText=el.name;
    
        let  p1=document.createElement("p")
        p1.innerText=el.category;
    
        let  p2=document.createElement("p")
        p2.innerText=el.price;
    
        let  p3=document.createElement("p")
        p3.innerText=el.rating;
    
        let img=document.createElement("img")
        img.src=el.image;
        image.height="100%"
        image.width="100%"


        let button=document.createElement("")

        document.getElementById("button")
        button.innerText="ADD to cart"
        
        box.append(h2,img,p1,p2,p3)

    })


}
showData(data)