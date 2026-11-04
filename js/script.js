let products = [
  {id:1, name:'Watermelon Juice', cat:'Juices', price:40, img:'juices/watermelon.jpg'},
  {id:2, name:'Muskmelon Juice', cat:'Juices', price:40, img:'juices/musk_melon.jpg'},
  {id:3, name:'Orange Juice', cat:'Juices', price:50, img:'juices/orange.jpg'},
  {id:4, name:'Sathukudi Juice', cat:'Juices', price:45, img:'juices/sathukudi.jpg'},
  {id:5, name:'Mango Juice', cat:'Juices', price:50, img:'juices/mango.jpg'},
  {id:6, name:'Pomegranate Juice', cat:'Juices', price:55, img:'juices/pome.jpg'},
  {id:7, name:'Pineapple Juice', cat:'Juices', price:35, img:'juices/pineapple.jpg'},
  {id:8, name:'Papaya Juice', cat:'Juices', price:25, img:'juices/papaya.jpg'},
  {id:9, name:'Apple Juice', cat:'Juices', price:45, img:'juices/apple.jpg'},
  {id:10, name:'Grapes Juice', cat:'Juices', price:40, img:'juices/grape.jpg'},
  {id:11, name:'Carrot Juice', cat:'Juices', price:55, img:'juices/carrot.jpg'},
  {id:12, name:'Beetroot Juice', cat:'Juices', price:45, img:'juices/beetroot.jpg'},
  {id:13, name:'Lime Juice', cat:'Juices', price:25, img:'juices/fresh_lime.jpg'},
  {id:14, name:'Red Banana', cat:'Juices', price:50, img:'juices/red_banana.jpg'},
  {id:15, name:'Kiwi Juice', cat:'Juices', price:70, img:'juices/kiwi.jpg'},
  {id:16, name:'Dragon Fruit', cat:'Juices', price:55, img:'juices/dragon_fruit.jpg'},
  {id:17, name:'Avocado Juice', cat:'Juices', price:65, img:'juices/Butter_fruit.jpg'},
  {id:18, name:'Chikoo Juice', cat:'Juices', price:45, img:'juices/sapota.jpg'},
  {id:19, name:'Lemon Soda', cat:'Juices', price:30, img:'juices/lemon_soda.jpg'},
  {id:20, name:'Guava Juice', cat:'Juices', price:30, img:'juices/guava.jpg'},
  {id:21, name:'Amla Juice', cat:'Juices', price:30, img:'juices/nellikkai.jpg'},
  {id:22, name:'Mix Fruit', cat:'Juices', price:55, img:'juices/mix_fruit.jpg'},
  {id:23, name:'custard apple', cat:'Juices', price:40, img:'juices/custard_apple.jpg'},
  {id:24, name:'fig(atthi)', cat:'Juices', price:50, img:'juices/fig.jpg'},
  {id:25, name:'Mint Lime', cat:'Juices', price:30, img:'juices/mint lime.jpg'},
  {id:26, name:'Pineapple Lime', cat:'Juices', price:35, img:'juices/pineapple lime.jpg'},
  {id:27, name:'Grape Lime', cat:'Juices', price:35, img:'juices/grape lime.jpg'},

  // Falooda
  {id:28, name:'Falooda', cat:'Falooda', price:90, img:'falooda/normal_falooda.jpg'},
  {id:29, name:'royal falooda', cat:'Falooda', price:130, img:'falooda/royal_falooda.jpg'},
  {id:30, name:'strawberry falooda', cat:'Falooda', price:95, img:'falooda/strawberry_falooda.jpg'},
  {id:31, name:'butterscotch falooda', cat:'Falooda', price:95, img:'falooda/butterscotch_falooda.jpg'},
  {id:32, name:'dry fruit falooda', cat:'Falooda', price:120, img:'falooda/dry_fruit_falooda.jpg'},
  {id:33, name:'chocolate Falooda', cat:'Falooda', price:95, img:'falooda/chocolate_falooda.jpg'}, 

  // Milkshakes
  {id:34, name:'Butterscotch Milkshake', cat:'Milkshakes', price:60, img:'milkshakes/Butterscotch Milk Shake.jpg'},
  {id:35, name:'Cherry Milkshake', cat:'Milkshakes', price:55, img:'milkshakes/Cherry Milkshake.jpg'},
  {id:36, name:'Muskmelon Milk Shake', cat:'Milkshakes', price:55, img:'milkshakes/Muskmelon Milk Shake.jpg'},
  {id:37, name:'Strawberry Milk Shake', cat:'Milkshakes', price:65, img:'milkshakes/Strawberry Milkshake.jpg'},
  {id:38, name:'Dates Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:39, name:'Apple Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Apple Milk Shake.jpg'},
  {id:40, name:'Mango Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Mango Milk Shake.jpg'},
  {id:41, name:'Banana Milk Shake', cat:'Milkshakes', price:55, img:'milkshakes/Banana Milk Shake.jpg'},
  {id:42, name:'Water Melon Shake', cat:'Milkshakes', price:50, img:'milkshakes/Watermelon Milk Shake.jpg'},
  {id:43, name:'Pomegranate Milk Shake', cat:'Milkshakes', price:65, img:'milkshakes/Pomegranate Shake.jpg'},
  {id:44, name:'Fig Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Fig Milk Shake.jpg'},
  {id:45, name:'Vanilla Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Vanilla Milk Shake.jpg'},
  {id:46, name:'Chocolate Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Chocolate Milk Shake.jpg'},
  {id:47, name:'Badam Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Badam Milk Shake.jpg'},
  {id:48, name:'Pista Milk Shake', cat:'Milkshakes', price:70, img:'milkshakes/Pista Milk Shake.jpg'},
  {id:49, name:'Oreo Milk Shake', cat:'Milkshakes', price:65, img:'milkshakes/Oreo Milk Shake.jpg'},
  {id:50, name:'Kitkat Milk Shake', cat:'Milkshakes', price:65, img:'milkshakes/Kitkat Milk Shake.jpg'},
  {id:51, name:'Gems Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Gems Milk Shake.jpg'},
  {id:52, name:'Jackfruit Milk Shake', cat:'Milkshakes', price:70, img:'milkshakes/Jackfruit Milk Shake.jpg'},
  {id:53, name:'Guava Milk Shake', cat:'Milkshakes', price:50, img:'milkshakes/Guava Milk Shake.jpg'},
  {id:54, name:'Lychi Milk Shake', cat:'Milkshakes', price:65, img:'milkshakes/Lychi Milk Shake.jpg'},
  {id:55, name:'Green Apple Milk Shake', cat:'Milkshakes', price:60, img:'milkshakes/Green Apple Milk Shake.jpg'},
  {id:56, name:'Brownie Milkshake', cat:'Milkshakes', price:65, img:'milkshakes/Brownie Milkshake.jpg'},

  // Lassi
  {id:57, name:'Lassi', cat:'Lassi', price:35, img:'lassi/Lassi.jpg'},
  {id:58, name:'Honey Lassi', cat:'Lassi', price:45, img:'lassi/Honey Lassi.jpg'},
  {id:59, name:'Banana Lassi', cat:'Lassi', price:45, img:'lassi/Banana Lassi.jpg'},
  {id:60, name:'Strawberry Lassi', cat:'Lassi', price:45, img:'lassi/Strawberry Lassi.jpg'},
  {id:61, name:'Chocolate Lassi', cat:'Lassi', price:45, img:'lassi/Chocolate Lassi.jpg'},
  {id:62, name:'Butterscotch Lassi', cat:'Lassi', price:45, img:'lassi/Butterscotch Lassi.jpg'},
  {id:63, name:'Lychee Lassi', cat:'Lassi', price:45, img:'lassi/Lychee Lassi.jpg'},
  {id:64, name:'Green Apple Lassi', cat:'Lassi', price:45, img:'lassi/Green Apple Lassi.jpg'},
  {id:65, name:'Mango Lassi', cat:'Lassi', price:45, img:'lassi/Mango Lassi.jpg'},
  {id:66, name:'Dates Lassi', cat:'Lassi', price:45, img:'lassi/Dates Lassi.jpg'},
  {id:67, name:'Rose Lassi', cat:'Lassi', price:45, img:'lassi/Rose Lassi.jpg'},
  {id:68, name:'Blueberry Lassi', cat:'Lassi', price:45, img:'lassi/Blueberry Lassi.jpg'},
  {id:69, name:'Dry Fruit Lassi', cat:'Lassi', price:60, img:'lassi/Dry Fruit Lassi.jpg'},
  {id:70, name:'Mint Lassi', cat:'Lassi', price:40, img:'lassi/Mint Lassi.jpg'},
  {id:71, name:'Carrot Lassi', cat:'Lassi', price:50, img:'lassi/Carrot Lassi.jpg'},

  // Beverages
  {id:72, name:'Tea', cat:'Beverages', price:15, img:'beverages/tea.jpg'},
  {id:73, name:'Coffee', cat:'Beverages', price:20, img:'beverages/coffee.jpg'},
  {id:74, name:'Filter Coffee', cat:'Beverages', price:30, img:'beverages/filter coffee.jpg'},
  {id:75, name:'Ginger Tea', cat:'Beverages', price:20, img:'beverages/ginger tea.jpg'},
  {id:76, name:'Lemon Tea', cat:'Beverages', price:20, img:'beverages/lemon tea.jpg'},
  {id:77, name:'Lemon Tea with Honey', cat:'Beverages', price:25, img:'beverages/lemon tea with honey.jpg'},
  {id:78, name:'Pineapple Tea', cat:'Beverages', price:30, img:'beverages/pineapple tea.jpg'},
  {id:79, name:'Boost', cat:'Beverages', price:40, img:'beverages/boost.jpg'},
  {id:80, name:'Horlicks', cat:'Beverages', price:40, img:'beverages/horlicks.jpg'},
  {id:81, name:'Elachi Tea', cat:'Beverages', price:30, img:'beverages/elachi Tea.jpg'},
  {id:82, name:'Pineapple Tea with Honey', cat:'Beverages', price:35, img:'beverages/pineapple tea honey.jpg'},
  {id:83, name:'Cold Horlicks', cat:'Beverages', price:85, img:'beverages/cold horlicks.jpg'},
  {id:84, name:'Cold Boost', cat:'Beverages', price:85, img:'beverages/cold boost.jpg'},
  {id:85, name:'Cold Coffee', cat:'Beverages', price:60, img:'beverages/cold coffee.jpg'},

  // Mojitos
  {id:86, name:'Blue Berry Mojito', cat:'Mojitos', price:65, img:'mojitos/Blue Berry Mojito.jpg'},
  {id:87, name:'Green Apple Mojito', cat:'Mojitos', price:65, img:'mojitos/Green Apple Mojito.jpg'},
  {id:88, name:'Lychee Mojito', cat:'Mojitos', price:65, img:'mojitos/Lychee Mojito.jpg'},
  {id:89, name:'Strawberry Mojito', cat:'Mojitos', price:65, img:'mojitos/Strawberry Mojito.jpg'},
  {id:90, name:'Lemon Mojito', cat:'Mojitos', price:60, img:'mojitos/Lemon Mojito.jpg'},
  {id:91, name:'Watermelon Mojito', cat:'Mojitos', price:60, img:'mojitos/Watermelon Mojito.jpg'},
  {id:92, name:'Orange Mojito', cat:'Mojitos', price:65, img:'mojitos/Orange Mojito.jpg'},

  // Chaat Items
  {id:93, name:'Pani Puri (6 Nos)', cat:'Chaat Items', price:25, img:'chaat items/Pani Puri.jpg'},
  {id:94, name:'Chuka Puri', cat:'Chaat Items', price:30, img:'chaat items/Chuka Puri.jpg'},
  {id:95, name:'Aloo Puri', cat:'Chaat Items', price:30, img:'chaat items/Aloo Puri.jpg'},
  {id:96, name:'Aloo Cheese Puri', cat:'Chaat Items', price:45, img:'chaat items/Aloo Cheese Puri.jpg'},
  {id:97, name:'Sev Puri', cat:'Chaat Items', price:40, img:'chaat items/Sev Puri.jpg'},
  {id:98, name:'Dahi Puri', cat:'Chaat Items', price:70, img:'chaat items/Dahi Puri.jpg'},
  {id:99, name:'Masala Puri', cat:'Chaat Items', price:45, img:'chaat items/Masala Puri.jpg'},
  {id:100, name:'Pav Bhaji', cat:'Chaat Items', price:50, img:'chaat items/Pav Bhaji.jpg'},
  {id:101, name:'Cheese Pav Bhaji', cat:'Chaat Items', price:60, img:'chaat items/Cheese Pav Bhaji.jpg'},
  {id:102, name:'Bhel Puri', cat:'Chaat Items', price:60, img:'chaat items/Bhel Puri.jpg'},
  {id:103, name:'Murukku Sandwich', cat:'Chaat Items', price:60, img:'chaat items/Murukku Sandwich.jpg'},
  {id:104, name:'Cheese Murukku Sandwich', cat:'Chaat Items', price:70, img:'chaat items/Cheese Murukku Sandwich.jpg'},
  {id:105, name:'Khakra Sandwich', cat:'Chaat Items', price:60, img:'chaat items/Khakra Sandwich.jpg'},
  {id:106, name:'Cheese Khakra Sandwich', cat:'Chaat Items', price:70, img:'chaat items/Cheese Khakra Sandwich.jpg'},
  {id:107, name:'Samosa', cat:'Chaat Items', price:15, img:'chaat items/samosa.jpg'},
  {id:108, name:'Banana Bhaji', cat:'Chaat Items', price:12, img:'chaat items/banana.jpg'},
  {id:109, name:'Chilli Bhaji', cat:'Chaat Items', price:10, img:'chaat items/chilli.jpg'},
  {id:110, name:'Bread Bhaji', cat:'Chaat Items', price:10, img:'chaat items/bread.jpg'},
  {id:111, name:'Egg Bonda', cat:'Chaat Items', price:15, img:'chaat items/egg.jpg'},

  // Maggi
  {id:112, name:'Maggi', cat:'Maggi', price:50, img:'maggi/Maggi.jpg'},
  {id:113, name:'Veg Maggi', cat:'Maggi', price:60, img:'maggi/Veg Maggi.jpg'},
  {id:114, name:'Cheese Maggi', cat:'Maggi', price:65, img:'maggi/Cheese Maggi.jpg'},
  {id:115, name:'Peri Peri Maggi', cat:'Maggi', price:60, img:'maggi/Peri Peri Maggi.jpg'},
  {id:116, name:'Schezwan Maggi', cat:'Maggi', price:60, img:'maggi/Schezwan Maggi.jpg'},
  {id:117, name:'Egg Maggi', cat:'Maggi', price:65, img:'maggi/Egg Maggi.jpg'},

  // Ice Cream
  {id:118, name:'Vanilla', cat:'Ice Cream', price:40, img:'icecream/Vanilla.jpg'},
  {id:119, name:'Mango', cat:'Ice Cream', price:40, img:'icecream/Mango.jpg'},
  {id:120, name:'Butterscotch', cat:'Ice Cream', price:40, img:'icecream/Butterscotch.jpg'},
  {id:121, name:'Pista', cat:'Ice Cream', price:40, img:'icecream/Pista.jpg'},
  {id:122, name:'Strawberry', cat:'Ice Cream', price:40, img:'icecream/Strawberry.jpg'},
  {id:123, name:'Chocolate', cat:'Ice Cream', price:40, img:'icecream/Chocolate.jpg'},
  {id:124, name:'Mixed Ice Cream', cat:'Ice Cream', price:110, img:'icecream/Mixed Ice Cream.jpg'},

  // Fruit Salad
  {id:125, name:'Fruit Salad', cat:'Fruit Salad', price:70, img:'nuts/Fruit Salad.jpg'},
  {id:126, name:'Fruit Salad With Ice Cream', cat:'Fruit Salad', price:60, img:'nuts/Fruit Salad with Ice Cream.jpg'},
  {id:127, name:'Fruit Salad With Honey', cat:'Fruit Salad', price:80, img:'nuts/Fruit Salad with Honey.jpg'},
  {id:128, name:'Nuts & Ice Cream', cat:'Fruit Salad', price:70, img:'nuts/Nuts & Ice Cream.jpg'},

  // Sandwich & Toast
  {id:129, name:'Veg Sandwich', cat:'Sandwich & Toast', price:60, img:'sandwich_toast/Veg Sandwich.jpg'},
  {id:130, name:'Veg Cheese Sandwich', cat:'Sandwich & Toast', price:85, img:'sandwich_toast/Veg Cheese Sandwich.jpg'},
  {id:131, name:'Corn Sandwich', cat:'Sandwich & Toast', price:60, img:'sandwich_toast/Corn Sandwich.jpg'},
  {id:132, name:'Corn Cheese Sandwich', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Corn Cheese Sandwich.jpg'},
  {id:133, name:'Bread Butter Jam', cat:'Sandwich & Toast', price:40, img:'sandwich_toast/Bread Butter Jam.jpg'},
  {id:134, name:'Paneer Sandwich', cat:'Sandwich & Toast', price:75, img:'sandwich_toast/Paneer Sandwich.jpg'},
  {id:135, name:'Chilly Cheese Toast', cat:'Sandwich & Toast', price:80, img:'sandwich_toast/Chilly Cheese Toast.jpg'},
  {id:136, name:'Garlic Cheese Toast', cat:'Sandwich & Toast', price:80, img:'sandwich_toast/Garlic Cheese Toast.jpg'},
  {id:137, name:'Aloo Masala Cheese Toast', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Aloo Masala Cheese Toast.jpg'},
  {id:138, name:'Garlic Corn Cheese Toast', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Garlic Corn Cheese Toast.jpg'},

  // Fried Items
  {id:139, name:'French Fries', cat:'Fried Items', price:60, img:'fried_items/french fries.jpg'},
  {id:140, name:'Peri Peri French Fries', cat:'Fried Items', price:75, img:'fried_items/peri peri.jpg'},
  {id:141, name:'Masala French Fries', cat:'Fried Items', price:90, img:'fried_items/Masala.jpg'},
  {id:142, name:'Cheese French Fries', cat:'Fried Items', price:90, img:'fried_items/Cheese.jpg'},
  {id:143, name:'Chicken Momos', cat:'Fried Items', price:90, img:'fried_items/chicken momos.jpg'},
  {id:144, name:'Veg Momos', cat:'Fried Items', price:75, img:'fried_items/veg momos.jpg'},
  {id:145, name:'Chicken Kievs', cat:'Fried Items', price:95, img:'fried_items/chicken kieves.jpg'},
  {id:146, name:'Chicken Nuggets', cat:'Fried Items', price:100, img:'fried_items/nuggets.jpg'},
  {id:147, name:'Potato Kievs', cat:'Fried Items', price:80, img:'fried_items/potato kieves.jpg'},
  {id:148, name:'Chicken Popcorn', cat:'Fried Items', price:100, img:'fried_items/popcorn.jpg'},
  {id:149, name:'Chicken Cutlet', cat:'Fried Items', price:100, img:'fried_items/cutlet.jpg'},
  {id:150, name:'Cheese Ball', cat:'Fried Items', price:65, img:'fried_items/cheese ball.jpg'},

];

let cart=[], bills=JSON.parse(localStorage.getItem('ms_bills')||'[]'), curPage=1, perPage=8, curCat='All', sText='', editingId=null;
let currentViewBillId = null; // Ipa current view bill id store pannrom
let parcelCharge = 0; // PARCEL - NEW
let parcelClicks = 0; // COUNT

function addParcel(amt){
  parcelCharge += amt; // ETHANA CLICK PANALUM ADD AAGUM
  parcelClicks++;
  document.getElementById('parcelAmt').textContent = parcelCharge;
  document.getElementById('parcelClicks').textContent = parcelClicks;
  document.getElementById('parcelInfo').textContent = parcelClicks + ' clicks';
  document.getElementById('parcelChargeText').style.display = 'block';
  renderCart();
}
function clearParcel(){
  parcelCharge = 0;
  parcelClicks = 0;
  document.getElementById('parcelAmt').textContent = '0';
  document.getElementById('parcelClicks').textContent = '0';
  document.getElementById('parcelInfo').textContent = '0 clicks';
  document.getElementById('parcelChargeText').style.display = 'none';
  renderCart();
}

function updateDateTime(){
  let dtEl = document.getElementById('dt');
  if(dtEl){
    dtEl.textContent = new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});
  }
}
setInterval(updateDateTime, 1000);
updateDateTime(); // First time call
function updateBillNo(){ 
  // BILL001 correct logic - max bill no +1
  let nextNum = 1;
  if(bills.length>0){
    let maxNum = 0;
    bills.forEach(b=>{
      let m = b.billNo.match(/BILL(\d+)/);
      if(m){
        let n = parseInt(m[1]);
        if(n>maxNum) maxNum=n;
      }
    });
    nextNum = maxNum + 1;
  }
  document.getElementById('bno').textContent='BILL'+String(nextNum).padStart(3,'0');
  let billDateEl = document.getElementById('billDate');
  if(billDateEl){
    // IST date
    let now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
    let yyyy = now.getFullYear();
    let mm = String(now.getMonth()+1).padStart(2,'0');
    let dd = String(now.getDate()).padStart(2,'0');
    if(!billDateEl.value) billDateEl.value = yyyy+'-'+mm+'-'+dd;
  }
}


let categories=['All','Juices','Falooda','Milkshakes','Lassi','Beverages','Mojitos','Chaat Items','Maggi','Fried Items','Ice Cream','Fruit Salad','Sandwich & Toast'];
function renderCats(){ document.getElementById('cats').innerHTML=categories.map(c=>`<button class="cat-btn ${curCat==c?'active':''}" onclick="selCat('${c}')">${c}</button>`).join(''); }
function selCat(c){ curCat=c; curPage=1; renderCats(); renderGrid(); }
function doSearch(){ sText=document.getElementById('search').value.toLowerCase(); curPage=1; renderGrid(); }

function renderGrid(){
  let grid=document.getElementById('grid'); if(!grid) return;
  let f=products.filter(p=> (curCat=='All'||p.cat==curCat) && p.name.toLowerCase().includes(sText));
  // NO PAGINATION - Full items kaamikku
  grid.innerHTML=f.map(p=>`
    <div class="col-6 col-md-3">
      <div class="product-box" onclick="addCart(${p.id})">
        <img src="images/${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/80/fffbeb/16a34a?text=Juice'">
        <div class="product-name">${p.name}</div>
        <div class="product-bottom"><span class="price">Rs.${p.price}</span><button class="btn-add" onclick="event.stopPropagation(); addCart(${p.id})">Add</button></div>
      </div>
    </div>`).join('');
  // Pagination hide - empty
  let pag=document.getElementById('pag'); if(pag) pag.innerHTML='';
}
function goP(p){ if(p<1) return; curPage=p; renderGrid(); }

function addCart(id){
  let prod=products.find(x=>x.id==id); if(!prod) return;
  let ex=cart.find(c=>c.id==id); if(ex) ex.qty++; else cart.push({id:prod.id, name:prod.name, price:parseFloat(prod.price), qty:1});
  renderCart();
}
function renderCart(){
  let body=document.getElementById('cartBody');
  if(!body) return;
  let subTotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  let grandTotal = subTotal + parcelCharge;
    // CART EMPTY + PARCEL 0 NA - No items kaatum, parcel hide
  if(cart.length==0){
    if(parcelCharge==0){
      body.innerHTML='<tr><td colspan="5" class="text-center text-muted py-3">No items - Add from left</td></tr>';
      // Parcel DOM full hide
      let pct = document.getElementById('parcelChargeText');
      if(pct) pct.style.display='none';
      let pi = document.getElementById('parcelInfo');
      if(pi) pi.textContent='0 clicks';
    } else {
      // Cart empty but parcel mattum irukku - parcel mattum kaatum
      body.innerHTML=`<tr><td colspan="2">📦 Parcel (${parcelClicks} clicks)</td><td></td><td>Rs.${parcelCharge}</td><td><span style="color:red;cursor:pointer" onclick="clearParcel()">✕</span></td></tr>`;
    }
  } else {
    body.innerHTML=cart.map((c,i)=>`<tr><td>${i+1}</td><td>${c.name}</td><td><button class="btn btn-sm border py-0 px-1" onclick="chg(${i},-1)">-</button> ${c.qty} <button class="btn btn-sm border py-0 px-1" onclick="chg(${i},1)">+</button></td><td>Rs.${c.price*c.qty}</td><td><span class="text-danger" style="cursor:pointer" onclick="rem(${i})">✕</span></td></tr>`).join('');
    if(parcelCharge>0){
      body.innerHTML+=`<tr style="background:#fef3c7;"><td></td><td>📦 Parcel (${parcelClicks} clicks)</td><td></td><td>Rs.${parcelCharge}</td><td><span style="color:red;cursor:pointer" onclick="clearParcel()">✕</span></td></tr>`;
    }
  }
  document.getElementById('gt').textContent='Rs. '+grandTotal;
  // Grand Total 0 na parcel text hide
  if(grandTotal==0){
    let pct = document.getElementById('parcelChargeText');
    if(pct) pct.style.display='none';
  }
}


function chg(i,d){ cart[i].qty+=d; if(cart[i].qty<=0) cart.splice(i,1); renderCart(); }
function rem(i){ cart.splice(i,1); renderCart(); }

function saveBill(){
  if(cart.length==0 && parcelCharge==0){ alert('Add items first - Cart empty!'); return false; }
  let tnoEl=document.getElementById('tno'); let tno=tnoEl?tnoEl.value:''; 
  if(!tno || tno.trim()==''){ alert('Enter Table Number!'); if(tnoEl) tnoEl.focus(); return false; }
  let billDateEl=document.getElementById('billDate'); let billDateInput=billDateEl?billDateEl.value:'';
  if(billDateEl && !billDateInput){ alert('Select Bill Date 📅'); return false; }
  
  // PARCEL ADD - IDHA INGA PODANUM
  let itemsTotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  let total = itemsTotal + parcelCharge; // PARCEL ADD AAGI TOTAL VARUM
  
  let formattedDate=billDateInput?new Date(billDateInput+'T12:00:00').toLocaleDateString('en-IN'):new Date().toLocaleDateString('en-IN');
  
  // EDIT MODE CHECK - Same Bill No varanum!
  if(editingId){
    // Old bill-a update pannu - pudhu bill create panna koodathu!
    let idx=bills.findIndex(x=>x.id==editingId);
    if(idx!=-1){
      bills[idx].tableNo=tno;
      bills[idx].billDate=billDateInput||bills[idx].billDate;
      bills[idx].formattedDate=formattedDate;
      bills[idx].items=[...cart];
      bills[idx].parcelCharge=parcelCharge; // PARCEL SAVE
      bills[idx].parcelClicks=parcelClicks; // CLICKS SAVE
      bills[idx].total=total; // TOTAL WITH PARCEL
      bills[idx].count=cart.length;
      bills[idx].date=new Date().toLocaleString('en-IN');
      
      localStorage.setItem('ms_bills', JSON.stringify(bills));
      
      let sm=document.getElementById('successMsg');
      if(sm){
        sm.innerHTML='✅ '+bills[idx].billNo+' Updated Successfully! Table: '+tno+' - Rs.'+total+' (Parcel Rs.'+parcelCharge+')';
        sm.style.display='block';
        sm.classList.add('show');
        setTimeout(()=>{ sm.style.display='none'; sm.classList.remove('show'); }, 5000);
      }
      setTimeout(()=>{
        cart=[]; parcelCharge=0; parcelClicks=0; editingId=null;
        if(tnoEl) tnoEl.value='';
        let editBox=document.getElementById('editBox'); if(editBox) editBox.classList.add('d-none');
        if(typeof clearParcel === 'function') clearParcel();
        renderCart(); updateBillNo(); renderSaved();
      }, 600);
      
      return false;
    }
  }
  
  // NEW BILL - IDHULA PARCEL ADD
  let bnoEl=document.getElementById('bno') || document.getElementById('billNoDisplay') || document.getElementById('billNo');
let bno='';
if(bnoEl){
  bno=bnoEl.textContent||bnoEl.value;
}
// Empty or timestamp maadiri perusa irundha correct BILL001 generate
if(!bno || bno.length>10 || bno.includes('1793')){
  let maxNum = 0;
  bills.forEach(b=>{
    let m = b.billNo.match(/BILL(\d+)/);
    if(m){
      let n = parseInt(m[1]);
      if(n>maxNum) maxNum=n;
    }
  });
  bno='BILL'+String(maxNum+1).padStart(3,'0');
  if(bills.length==0) bno='BILL001';
}


  
  // BILL OBJECT LA PARCEL ADD - IDHU MUKKIYAM
  let bill={
    id:Date.now(), 
    billNo:bno, 
    billDate:billDateInput, 
    formattedDate:formattedDate, 
    date:new Date().toLocaleString('en-IN'), 
    tableNo:tno, 
    items:[...cart], 
    parcelCharge:parcelCharge, 
    parcelClicks:parcelClicks, 
    total:total, 
    count:cart.length
  };
  
  bills.push(bill);
  localStorage.setItem('ms_bills', JSON.stringify(bills));
  
  let sm=document.getElementById('successMsg');
  if(sm){
    sm.innerHTML='✅ '+bno+' Saved! Total Rs.'+total+' (Items Rs.'+itemsTotal+' + Parcel Rs.'+parcelCharge+')';
    sm.style.display='block';
    sm.classList.add('show');
    setTimeout(()=>{ sm.style.display='none'; sm.classList.remove('show'); }, 4000);
  }
  
  setTimeout(()=>{
    cart=[]; parcelCharge=0; parcelClicks=0;
    if(tnoEl) tnoEl.value='';
    if(typeof clearParcel === 'function') clearParcel();
    renderCart(); updateBillNo(); renderSaved();
  }, 600);
}
  


function renderSaved(){
  document.getElementById('cnt').textContent=bills.length;
  document.getElementById('cnt2').textContent=bills.length;
  let body=document.getElementById('savedBody');
  if(bills.length==0){ body.innerHTML='<tr><td colspan="6" class="text-center text-muted py-3">No bills yet</td></tr>'; return; }
  // FIXED: use count, not undefined, handle both count and itemsCount
  body.innerHTML=bills.map(b=>{ let itemCount = b.count || b.itemsCount || b.items?.length || 0; return `<tr><td>${b.billNo}</td><td>${b.formattedDate || b.date}</td><td>${b.tableNo}</td><td>${itemCount} items</td><td>Rs.${b.total}</td><td><button class="btn btn-sm btn-outline-dark me-1" onclick="viewB(${b.id})">View</button><button class="btn btn-sm btn-outline-success me-1" onclick="editB(${b.id})">Edit</button><button class="btn btn-sm btn-outline-danger" onclick="delB(${b.id})">Delete</button></td></tr>`; }).join('');
}
function viewB(id){
  try{
    console.log('View clicked:', id);
    let b = bills.find(x=>x.id==id);
    if(!b){ alert('Bill not found!'); return; }
    currentViewBillId = id;
    let recEl = document.getElementById('rec');
    if(!recEl){ alert('rec div missing'); return; }
    recEl.innerHTML=`
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="color:#6b7280; font-size:14px;">Bill No</span>
        <span style="font-weight:600; font-size:14px;">${b.billNo}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="color:#6b7280; font-size:14px;">Date</span>
        <span style="font-weight:500; font-size:14px;">${b.formattedDate || b.date}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
        <span style="color:#6b7280; font-size:14px;">Table</span>
        <span style="font-weight:600; font-size:14px;">${b.tableNo}</span>
      </div>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 15px 0;">
      <h3 style="margin:0 0 12px 0; font-size:16px; font-weight:600;">Items</h3>
      ${b.items.map(i=>`<div style="display:flex; justify-content:space-between; margin-bottom:14px;"><span style="font-size:15px;">${i.name}</span><span style="font-size:15px;">${i.qty} × ₹${i.price}</span></div>`).join('')}
      <hr style="border:none; border-top:1.5px solid #111; margin:0 0 15px 0;">
      <div style="display:flex; justify-content:space-between;">
        <span style="font-size:22px; font-weight:700;">Total</span>
        <span style="font-size:28px; font-weight:800;">₹${b.total}</span>
      </div>
    `;
    openBillModal();
  }catch(err){
    console.error('viewB error:', err);
    alert('View error: '+err.message);
  }
}
function editB(id){
  let b=bills.find(x=>x.id==id); if(!b) return;
  cart=b.items.map(i=>({...i})); editingId=b.id;
  document.getElementById('tno').value=b.tableNo=='-'?'':b.tableNo;
  let billDateEl=document.getElementById('billDate'); if(billDateEl) billDateEl.value=b.billDate||new Date().toISOString().split('T')[0];
  document.getElementById('editBno').textContent=b.billNo;
  document.getElementById('editBox').classList.remove('d-none');
  // FIX: Billing page Bill No display-a edit panra bill no va maathu - mara kudadhu!
  let bnoEl=document.getElementById('bno'); if(bnoEl) bnoEl.textContent=b.billNo;
  renderCart(); showPage('billing');
}
function delB(id){ if(confirm('Delete this bill?')){ bills=bills.filter(b=>b.id!=id); localStorage.setItem('ms_bills',JSON.stringify(bills)); updateBillNo(); renderSaved(); } }
function showPage(p){ document.getElementById('billingPage').classList.toggle('d-none', p!='billing'); document.getElementById('savedPage').classList.toggle('d-none', p!='saved'); if(p=='saved') renderSaved(); }
function downloadReport(){
  if(bills.length==0){ alert('No bills'); return; }
  let txt=''; bills.forEach(b=>{ let c=b.count||b.itemsCount||b.items?.length||0; txt+=`==================================\nMS Emporium\nJUICES & SHAKES - FRESH & COLD\n----------------------------------\nBill No: ${b.billNo}\nDate: ${b.date}\nTable No: ${b.tableNo}\n----------------------------------\nITEM              QTY   AMT\n----------------------------------\n`; b.items.forEach(i=>{ txt+=`${i.name.padEnd(18)} ${String(i.qty).padEnd(4)} Rs.${i.price*i.qty}\n`; }); txt+=`----------------------------------\nTotal (${c} items)        Rs.${b.total}\n----------------------------------\nThank you! Visit again\nMS Emporium\n==================================\n\n`; });
  let blob=new Blob([txt],{type:'text/plain'}); let a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='MS_Emporium_Bills_'+new Date().toLocaleDateString().replace(/\//g,'-')+'.txt'; a.click();
}
renderCats(); renderGrid(); renderSaved();


// Azhagaana Bill - GST illa, HR lines design - un code ku
function formatFor58mm(){
  let billsData = JSON.parse(localStorage.getItem('ms_bills')||'[]');
  let b = billsData[billsData.length-1];
  if(!b) b = {billNo:'BILL003', formattedDate:'03/11/2026', tableNo:'', items:[{name:'Strawberry Falooda Extra Large With Extra Icecream And Nuts', qty:1, price:385}], total:385};
  function wrapText(text, maxLen){
    let lines = [];
    while(text.length > maxLen){
      let cut = text.lastIndexOf(' ', maxLen);
      if(cut === -1) cut = maxLen;
      lines.push(text.substring(0, cut));
      text = text.substring(cut).trim();
    }
    lines.push(text);
    return lines;
  }
  let txt = "";
  txt += "  * * * * * * * * * * * * * *\n";
  txt += "\n";
  txt += "      MS EMPORIUM\n";
  txt += "   Juices & Snacks\n";
  txt += "   ------------------------\n";
  txt += `Bill  : ${b.billNo}\n`;
  txt += `Date  : ${b.formattedDate || b.date}\n`;
  txt += "   ------------------------\n";
  txt += "ITEM              QTY AMOUNT\n";
  txt += "--------------------------------\n";
  b.items.forEach(i=>{
    let nameLines = wrapText(i.name, 32);
    nameLines.forEach(l=> txt += l + "\n");
    txt += `Qty ${i.qty} x Rs ${i.price}.00      ${i.price*i.qty}.00\n`;
    txt += "   ------------------------\n";
  });
  txt += `Subtotal              ${b.total}.00\n`;
  txt += "================================\n";
  txt += `TOTAL Rs              ${b.total}.00\n`;
  txt += "================================\n";
  txt += "   ------------------------\n";
  txt += "\n";
  txt += "       Thank you\n";
  txt += "      Visit Again\n";
  txt += "\n";
  txt += " *~*~*~*~*~*~*~*~*~*~*~*~*~*\n";
  txt += "\n";
  txt += "   Have a great day!\n";
  txt += "We serve fresh juices & snacks daily\n";
  return txt;
}
function printToRawBT(){
  let text = formatFor58mm();
  if(navigator.share){
    navigator.share({title:'MS Emporium Bill', text:text});
  }else{
    navigator.clipboard.writeText(text).then(()=>alert('✅ Bill Copied!'));
  }
}

function isIOS(){ 
  try{
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  }catch(e){ return false; }
}

// Global ku expose pannu - GitHub la function not defined varakudadhu
window.viewB = viewB;
window.openBillModal = openBillModal;
window.closeBillModal = closeBillModal;
window.editB = editB;
window.delB = delB;

function openBillModal(){
  try{
    let modal = document.getElementById('billModal');
    if(!modal){ alert('billModal missing'); return; }
    // Bootstrap modal-a bypass pannu - custom modal dhan
    modal.style.display = 'flex';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.zIndex = '99999';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    // Null check - GitHub la pdfBtn illa na crash aagathu
    let pdfBtn = document.getElementById('pdfBtn');
    let hint = document.getElementById('iosHint');
    let printBtn = document.getElementById('printBtn');
    if(pdfBtn){
      try{
        if(isIOS()) pdfBtn.style.display='flex';
        else pdfBtn.style.display='none';
      }catch(e){}
    }
    if(hint){
      try{
        if(isIOS()) hint.style.display='block';
        else hint.style.display='none';
      }catch(e){}
    }
  }catch(err){
    console.error('openBillModal error:', err);
  }
}

function closeBillModal(){
  try{
    let modal=document.getElementById('billModal'); 
    if(modal) modal.style.display='none';
  }catch(e){}
}


function handlePrint(){
  if(!currentViewBillId){ alert('View a bill first!'); return; }
  let b = bills.find(x=>x.id==currentViewBillId);
  if(!b) return;
  
  document.getElementById('billModal').style.display='none';

  // ITEMS alignment fix - table maadiri
  let itemsHTML = `
    <div style="display:flex; justify-content:space-between; font-weight:bold; border-bottom:1px solid #000; padding-bottom:3px; margin-bottom:5px;">
      <span style="width:55%; text-align:left;">ITEM</span>
      <span style="width:15%; text-align:center;">QTY</span>
      <span style="width:30%; text-align:right;">AMOUNT</span>
    </div>
  `;
  
  b.items.forEach(i=>{
    let name = i.name;
    let qty = i.qty;
    let price = i.price * qty;
    
    // Lengthy name 25 chars ku mela irundha wrap
    if(name.length > 22){
      // First line - name part
      itemsHTML += `
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
          <span style="width:55%; text-align:left; word-wrap:break-word;">${name}</span>
          <span style="width:15%; text-align:center;">${qty}</span>
          <span style="width:30%; text-align:right;">${price}.00</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:5px; font-size:11px; color:#555;">
          <span style="width:55%;">${qty} x Rs. ${i.price}.00</span>
          <span style="width:45%;"></span>
        </div>
      `;
    }else{
      // Short name - single line
      itemsHTML += `
        <div style="margin-bottom:5px;">
          <div style="display:flex; justify-content:space-between;">
            <span style="width:55%; text-align:left;">${name}</span>
            <span style="width:15%; text-align:center;">${qty}</span>
            <span style="width:30%; text-align:right;">${price}.00</span>
          </div>
          <div style="font-size:11px; color:#555; margin-left:2px;">${qty} x Rs. ${i.price}.00</div>
        </div>
      `;
    }
  });
  // PARCEL CHARGE PRINT - IDHA INGA ADD PANNU
let parcelChargePrint = b.parcelCharge || 0;
let parcelHTML = '';
if(parcelChargePrint > 0){
  parcelHTML = `
    <div style="display:flex; justify-content:space-between; padding:4px 0; font-size:13px; border-top:1px dashed #000; margin-top:5px;">
      <span>Parcel Charges</span>
      <span>Rs. ${parcelChargePrint}.00</span>
    </div>
  `;
}

  // Special lengthy case - Strawberry Falooda
  if(b.items.length===1 && b.items[0].name.includes("Strawberry")){
    itemsHTML = `
      <div style="display:flex; justify-content:space-between; font-weight:bold; border-bottom:1px solid #000; padding-bottom:3px; margin-bottom:5px;">
        <span style="width:55%;">ITEM</span>
        <span style="width:15%; text-align:center;">QTY</span>
        <span style="width:30%; text-align:right;">AMOUNT</span>
      </div>
      <div style="margin-bottom:3px;">Strawberry Falooda Extra Large</div>
      <div style="margin-bottom:3px;">With Extra Icecream And Nuts</div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span>Qty 1 x Rs 385.00</span>
        <span style="font-weight:bold;">385.00</span>
      </div>
    `;
  }

  let printWin = window.open('', '_blank');
  printWin.document.write(`
<html>
<head><title>MS Emporium - ${b.billNo}</title>
<style>
  @page { size: 80mm auto; margin: 0; }
  body { width: 72mm; margin: 0 auto; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.5; }
  .center { text-align: center; } .bold { font-weight: bold; }
  .line { border-top: 1px dashed #000; margin: 8px 0; }
  .flex { display: flex; justify-content: space-between; }
  .receipt { padding: 5mm; }
</style>
</head>
<body>
<div class="receipt">
  <div class="center bold" style="font-size:22px;">MS EMPORIUM</div>
  <div class="center bold" style="font-size:14px;">Ph: 7397468500</div>
  <div class="line"></div>
  <div class="flex"><span style="font-size:14px;">Bill</span><span>: ${b.billNo}</span></div>
  <div class="flex"><span style="font-size:14px;">Date</span><span>: ${b.formattedDate || b.date}</span></div>
  <div class="flex"><span style="font-size:14px;">Table</span><span>: ${b.tableNo}</span></div>
  <div class="line"></div>
  ${itemsHTML}
  ${parcelHTML}
  <div class="flex bold" style="font-size:14px; border-top:2px solid #000; border-bottom:2px solid #000; padding:5px 0; margin:5px 0;"><span>TOTAL</span><span>Rs. ${b.total}.00</span></div>
  <div class="center" style="font-size:14px; margin-top:10px;">Thank you! Visit Again</div>
 <div class="line"></div>
</div>
<script>window.onload=function(){ setTimeout(()=>{window.print();},500); }<\/script>
</body>
</html>
  `);
  printWin.document.close();
}


function saveAsPDF_iOS(){
  var billEl = document.getElementById('rec');
  var billText = billEl.innerText;
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF({orientation:'portrait', unit:'mm', format:[58,120]});
  doc.setFont('courier','normal');
  doc.setFontSize(9);
  var lines = doc.splitTextToSize(billText, 54);
  var y=5;
  lines.forEach(l=>{ if(y>115){ doc.addPage([58,120]); y=5; } doc.text(l,2,y); y+=4; });
  doc.save('BILL001.pdf');
  setTimeout(function(){
    if(confirm('PDF Downloaded! MPrinter la PDF open panni print pannava?')){
      var blob = doc.output('blob');
      var file = new File([blob], 'BILL001.pdf', {type:'application/pdf'});
      navigator.share({files:[file], title:'Bill PDF'}).catch(()=>{});
    }
  },500);
}

 


