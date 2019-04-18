
/*
This is the class defined to contain an TR element used to
display The(image, price, quantity, price)
 */
function imageLine(resourceUrl, Ptitle, quantity, price) {
    this.resourceUrl = resourceUrl;
    this.Ptitle = Ptitle;
    this.quantity = quantity;
    this.price = price;

}
imageLine.prototype = {
    constructor : imageLine,
    display: function() {

        trEle = document.createElement("tr");
        wrapperImg = document.createElement('td');
        timg = document.createElement('img');
        timg.classList.add("img-thumbnail");
        // timg.src = "images/art/tiny/" + resourceUrl;
        timg.setAttribute("src","images/art/tiny/" + this.resourceUrl);
        wrapperImg.appendChild(timg);
        ttitle = document.createElement('td');
        ttitle.innerText = this.Ptitle;
        tprice  = document.createElement('td');
        tprice.innerText ='$' +  this.price.toString();
        tquantity = document.createElement('td');
        tquantity.innerText = this.quantity.toString();
        tall = document.createElement('td');
        tall.innerText = '$' + (this.price*this.quantity).toString();
        trEle.appendChild(wrapperImg);
        trEle.appendChild(ttitle);
        trEle.appendChild(tquantity);
        trEle.appendChild(tprice);
        trEle.appendChild(tall);

        targetEle  = document.querySelector(".container tbody");
        targetPosAfter = document.getElementById('__before');
        //trEle is the newly created table Row containing img Info
        targetEle.insertBefore(trEle, targetPosAfter);
    }
};

/*
Creating and specifying two images and store them into Array
 */
$file1 = '116010.jpg';
$product1 = 'Artist Holding a Thistle';
$quantity1 = 2;
$price1 = 500;

$file2 = '113010.jpg';
$product2 = 'Self-portrait in a Straw Hat';
$quantity2 = 1;
$price2 = 700;


img1 = new imageLine($file1, $product1, $quantity1, $price1);
img2 = new imageLine($file2, $product2, $quantity2, $price2);
imgArray = Array(img1, img2);

/*
Using a For-Loop to display all the info
 */
for (let i = 0; i < imgArray.length; i++)
{
    imgArray[i].display();
}


/*
the definition of functions calculating the money
 */
var calculator = {
    calcTotal : function () {
        let all = 0;
        for (let i = 0; i < imgArray.length; i++)
        {
            all += imgArray[i].price * imgArray[i].quantity;
        }
        return all;
    },
    calcTax: function () {
        return this.calcTotal() * 0.1;
    },
    calcShipping: function () {
        if(this.calcTotal()>1000) return 40;
        else return 0;
    },
    calcGrandTotal: function () {
        return this.calcTotal() + this.calcTax() + this.calcShipping();
    }
};

/*
dynamically calculating the money
 */
document.querySelector("table tr .subTotal").innerHTML = calculator.calcTotal();
document.querySelector("table tr .tax").innerHTML = calculator.calcTax();
document.querySelector("table tr .shipping").innerHTML = calculator.calcShipping();
document.querySelector("table tr .grandTotal").innerHTML = calculator.calcGrandTotal();




