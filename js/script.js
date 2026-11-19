let products = [
  {id:1, name:'Watermelon Juice', cat:'Juices', price:40, img:'juices/watermelon.jpg'},
  {id:2, name:'Muskmelon Juice', cat:'Juices', price:50, img:'juices/musk_melon.jpg'},
  {id:3, name:'Orange Juice', cat:'Juices', price:55, img:'juices/orange.jpg'},
  {id:4, name:'Sathukudi Juice', cat:'Juices', price:50, img:'juices/sathukudi.jpg'},
  {id:5, name:'Mango Juice', cat:'Juices', price:60, img:'juices/mango.jpg'},
  {id:6, name:'Pomegranate Juice', cat:'Juices', price:45, img:'juices/pome.jpg'},
  {id:7, name:'Pineapple Juice', cat:'Juices', price:35, img:'juices/pineapple.jpg'},
  {id:8, name:'Papaya Juice', cat:'Juices', price:40, img:'juices/nellikkai.jpg'},
  {id:9, name:'Apple Juice', cat:'Juices', price:50, img:'juices/apple.jpg'},
  {id:10, name:'Grapes Juice', cat:'Juices', price:50, img:'juices/dragon_fruit.jpg'},
  {id:11, name:'Carrot Juice', cat:'Juices', price:65, img:'juices/grape.jpg'},
  {id:12, name:'Beetroot Juice', cat:'Juices', price:60, img:'juices/guava.jpg'},
  {id:13, name:'Lime Juice', cat:'Juices', price:25, img:'juices/Butter_fruit.jpg'},
  {id:14, name:'Red Banana', cat:'Juices', price:55, img:'juices/red_banana.jpg'},
  {id:15, name:'Blue Lime', cat:'Juices', price:45, img:'juices/blue.jpg'},
  {id:16, name:'Dragon Fruit', cat:'Juices', price:65, img:'juices/carrot.jpg'},
  {id:17, name:'Avocado Juice', cat:'Juices', price:80, img:'juices/fresh_lime.jpg'},
  {id:18, name:'Chikoo Juice', cat:'Juices', price:55, img:'juices/sapota.jpg'},
  {id:19, name:'Lemon Soda', cat:'Juices', price:30, img:'juices/lemon_soda.jpg'},
  {id:20, name:'Guava Juice', cat:'Juices', price:50, img:'juices/beetroot.jpg'},
  {id:21, name:'Amla Juice', cat:'Juices', price:40, img:'juices/papaya.jpg'},
  {id:22, name:'Mix Fruit', cat:'Juices', price:55, img:'juices/mix_fruit.jpg'},
  {id:23, name:'Strawberry Juice', cat:'Juices', price:60, img:'juices/strawberry.webp'},
  {id:24, name:'fig(atthi)', cat:'Juices', price:60, img:'juices/fig.jpg'},
  {id:25, name:'Mint Lime', cat:'Juices', price:30, img:'juices/mint lime.jpg'},
  {id:26, name:'Pineapple Lime', cat:'Juices', price:35, img:'juices/pineapple lime.jpg'},
  {id:27, name:'Grape Lime', cat:'Juices', price:35, img:'juices/grape lime.jpg'},
  {id:151, name:'Sweet Lemon Soda', cat:'Juices', price:35, img:'juices/sweetlemon.webp'},
  {id:152, name:'Mint Soda', cat:'Juices', price:35, img:'juices/mintsoda.webp'},
  {id:153, name:'Grape Soda', cat:'Juices', price:40, img:'juices/grapelime.webp'},
  {id:154, name:'Pomegranate Lime', cat:'Juices', price:45, img:'juices/pomelime.webp'},
  {id:155, name:'Mango Lime', cat:'Juices', price:45, img:'juices/mangolime.jpg'},
  {id:156, name:'Beetroot Lime', cat:'Juices', price:45, img:'juices/beetlime.webp'},
  {id:157, name:'Strawberry Lime', cat:'Juices', price:45, img:'juices/strawberrylime.webp'},
  {id:158, name:'Jaljera Lime', cat:'Juices', price:30, img:'juices/jaljera.webp'},
  {id:159, name:'Ginger Lime', cat:'Juices', price:30, img:'juices/ginger.webp'},
  {id:160, name:'ABC Juice', cat:'Juices', price:75, img:'juices/abc.webp'},
  {id:161, name:'Kiwi Juice', cat:'Juices', price:70, img:'juices/kiwi.webp'},


  // Falooda
  {id:28, name:'Falooda', cat:'Falooda', price:100, img:'falooda/butterscotch_falooda.jpg'},
  {id:29, name:'Rose Falooda', cat:'Falooda', price:110, img:'falooda/rose.jpg'},
  {id:30, name:'Strawberry falooda', cat:'Falooda', price:110, img:'falooda/chocolate_falooda.jpg'},
  {id:31, name:'Butterscotch falooda', cat:'Falooda', price:140, img:'falooda/normal_falooda.jpg'},
  {id:32, name:'Dry Fruit Falooda', cat:'Falooda', price:140, img:'falooda/dry_fruit_falooda.jpg'},
  {id:33, name:'Chocolate Falooda', cat:'Falooda', price:120, img:'falooda/strawberry_falooda.jpg'}, 
  {id:162, name:'Mango Falooda', cat:'Falooda', price:110, img:'falooda/mango.jpg'}, 

   // Milkshakes
  {id:34, name:'Butterscotch Milkshake', cat:'Milkshakes', price:90, img:'milkshakes/Butterscotch Milk Shake.jpg'},
  {id:35, name:'Cherry Milkshake', cat:'Milkshakes', price:90, img:'milkshakes/Cherry Milkshake.jpg'},
  {id:36, name:'Muskmelon Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Muskmelon Milk Shake.jpg'},
  {id:37, name:'Strawberry Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Strawberry Milkshake.jpg'},
  {id:38, name:'Dates Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:39, name:'Apple Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Apple Milk Shake.jpg'},
  {id:40, name:'Mango Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Mango Milk Shake.jpg'},
  {id:41, name:'Banana Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Banana Milk Shake.jpg'},
  {id:43, name:'Pomegranate Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Pomegranate Shake.jpg'},
  {id:44, name:'Fig Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Fig Milk Shake.jpg'},
  {id:45, name:'Vanilla Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Vanilla Milk Shake.jpg'},
  {id:46, name:'Chocolate Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Chocolate Milk Shake.jpg'},
  {id:49, name:'Oreo Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Oreo Milk Shake.jpg'},
  {id:50, name:'Kitkat Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Kitkat Milk Shake.jpg'},
  {id:51, name:'Gems Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Gems Milk Shake.jpg'},
  {id:54, name:'Lychi Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/Lychi Milk Shake.jpg'},
  {id:55, name:'Tutti Fruti Milk Shake', cat:'Milkshakes', price:90, img:'milkshakes/tutti.jpg'},
  {id:181, name:'Apple & Dates Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:182, name:'Dates & Papaya Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:183, name:'Dates & Fig Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:184, name:'Dates & Banana Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:185, name:'Choco Sapota Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:186, name:'Choco Banana Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:187, name:'Choco Apple Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:188, name:'Choco Fig Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:189, name:'Choco Boost Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:190, name:'Choco Nuts Milk Shake', cat:'Milkshakes', price:100, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:191, name:'Sarja Milk Shake', cat:'Milkshakes', price:80, img:'milkshakes/Dates Milk Shake.jpg'},
  {id:192, name:'MS Emporium Special Milk Shake', cat:'Milkshakes', price:150, img:'milkshakes/Dates Milk Shake.jpg'},
 


  // Lassi
  {id:57, name:'Lassi', cat:'Lassi', price:40, img:'lassi/Lassi.jpg'},
  {id:58, name:'Honey Lassi', cat:'Lassi', price:45, img:'lassi/Honey Lassi.jpg'},
  {id:59, name:'Banana Lassi', cat:'Lassi', price:50, img:'lassi/Banana Lassi.jpg'},
  {id:60, name:'Strawberry Lassi', cat:'Lassi', price:50, img:'lassi/Strawberry Lassi.jpg'},
  {id:61, name:'Chocolate Lassi', cat:'Lassi', price:50, img:'lassi/Chocolate Lassi.jpg'},
  {id:62, name:'Butterscotch Lassi', cat:'Lassi', price:60, img:'lassi/Butterscotch Lassi.jpg'},
  {id:63, name:'Lychee Lassi', cat:'Lassi', price:50, img:'lassi/Lychee Lassi.jpg'},
  {id:64, name:'Green Apple Lassi', cat:'Lassi', price:50, img:'lassi/Green Apple Lassi.jpg'},
  {id:65, name:'Mango Lassi', cat:'Lassi', price:50, img:'lassi/Mango Lassi.jpg'},
  {id:66, name:'Dates Lassi', cat:'Lassi', price:50, img:'lassi/Dates Lassi.jpg'},
  {id:67, name:'Rose Lassi', cat:'Lassi', price:45, img:'lassi/Rose Lassi.jpg'},
  {id:69, name:'Dry Fruit Lassi', cat:'Lassi', price:60, img:'lassi/Dry Fruit Lassi.jpg'},
  {id:70, name:'Mint Lassi', cat:'Lassi', price:45, img:'lassi/Mint Lassi.jpg'},
  {id:71, name:'Carrot Lassi', cat:'Lassi', price:50, img:'lassi/Carrot Lassi.jpg'},
  {id:179, name:'Pineapple Lassi', cat:'Lassi', price:80, img:'lassi/pinelassi.jpg'},
  {id:180, name:'Grape Lassi', cat:'Lassi', price:80, img:'lassi/grapelassi.jpg'},


  // Beverages
  {id:72, name:'Tea', cat:'Beverages', price:15, img:'beverages/tea.jpg'},
  {id:73, name:'Coffee', cat:'Beverages', price:20, img:'beverages/coffee.jpg'},
  {id:74, name:'Black Coffee', cat:'Beverages', price:20, img:'beverages/blackcoffee.jpg'},
  {id:75, name:'Ginger Tea', cat:'Beverages', price:20, img:'beverages/ginger tea.jpg'},
  {id:76, name:'Lemon Tea', cat:'Beverages', price:20, img:'beverages/lemon tea.jpg'},
  {id:77, name:'Lemon Tea with Honey', cat:'Beverages', price:25, img:'beverages/lemon tea with honey.jpg'},
  {id:78, name:'Pineapple Tea', cat:'Beverages', price:30, img:'beverages/pineapple tea.jpg'},
  {id:79, name:'Boost', cat:'Beverages', price:20, img:'beverages/boost.jpg'},
  {id:80, name:'Horlicks', cat:'Beverages', price:20, img:'beverages/horlicks.jpg'},
  {id:81, name:'Elachi Tea', cat:'Beverages', price:25, img:'beverages/elachi Tea.jpg'},
  {id:82, name:'Pineapple Tea with Honey', cat:'Beverages', price:35, img:'beverages/pineapple tea honey.jpg'},
  {id:83, name:'Cold Horlicks', cat:'Beverages', price:70, img:'beverages/cold horlicks.jpg'},
  {id:84, name:'Cold Boost', cat:'Beverages', price:70, img:'beverages/cold boost.jpg'},
  {id:85, name:'Cold Coffee', cat:'Beverages', price:70, img:'beverages/cold coffee.jpg'},
  {id:47, name:'Black Tea', cat:'Beverages', price:20, img:'beverages/blacktea.jpg'},


  // Mojitos
  {id:86, name:'Blue Berry Mojito', cat:'Mojitos', price:70, img:'mojitos/Blue Berry Mojito.jpg'},
  {id:87, name:'Green Apple Mojito', cat:'Mojitos', price:70, img:'mojitos/Green Apple Mojito.jpg'},
  {id:88, name:'Lychee Mojito', cat:'Mojitos', price:70, img:'mojitos/Lychee Mojito.jpg'},
  {id:89, name:'Strawberry Mojito', cat:'Mojitos', price:70, img:'mojitos/Strawberry Mojito.jpg'},
  {id:90, name:'Lemon Mojito', cat:'Mojitos', price:70, img:'mojitos/Lemon Mojito.jpg'},
  {id:91, name:'Watermelon Mojito', cat:'Mojitos', price:70, img:'mojitos/Watermelon Mojito.jpg'},
  {id:92, name:'Orange Mojito', cat:'Mojitos', price:70, img:'mojitos/Orange Mojito.jpg'},

  // Chaat Items
  {id:93, name:'Pani Puri (6 Nos)', cat:'Chaat Items', price:25, img:'chaat items/Pani Puri.jpg'},
  {id:163, name:'Parcel Pani Puri (6 Nos)', cat:'Chaat Items', price:30, img:'chaat items/Pani Puri.jpg'},
  {id:94, name:'Chuka Puri', cat:'Chaat Items', price:30, img:'chaat items/Chuka Puri.jpg'},
  {id:164, name:'Parcel Chuka Puri', cat:'Chaat Items', price:35, img:'chaat items/Chuka Puri.jpg'},
  {id:95, name:'Aloo Puri', cat:'Chaat Items', price:30, img:'chaat items/Aloo Puri.jpg'},
  {id:165, name:'Parcel Aloo Puri', cat:'Chaat Items', price:35, img:'chaat items/Aloo Puri.jpg'},
  {id:96, name:'Aloo Cheese Puri', cat:'Chaat Items', price:40, img:'chaat items/Aloo Cheese Puri.jpg'},
  {id:166, name:'Parcel Aloo Cheese Puri', cat:'Chaat Items', price:45, img:'chaat items/Aloo Cheese Puri.jpg'},
  {id:97, name:'Sev Puri', cat:'Chaat Items', price:40, img:'chaat items/Sev Puri.jpg'},
  {id:167, name:'Parcel Sev Puri', cat:'Chaat Items', price:45, img:'chaat items/Sev Puri.jpg'},
  {id:98, name:'Dahi Puri', cat:'Chaat Items', price:70, img:'chaat items/Dahi Puri.jpg'},
  {id:168, name:'Parcel Dahi Puri', cat:'Chaat Items', price:75, img:'chaat items/Dahi Puri.jpg'},
  {id:100, name:'Pav Bhaji', cat:'Chaat Items', price:50, img:'chaat items/Pav Bhaji.jpg'},
  {id:169, name:'Parcel Pav Bhaji', cat:'Chaat Items', price:55, img:'chaat items/Pav Bhaji.jpg'},
  {id:101, name:'Cheese Pav Bhaji', cat:'Chaat Items', price:60, img:'chaat items/Cheese Pav Bhaji.jpg'},
  {id:170, name:'Parcel Cheese Pav Bhaji', cat:'Chaat Items', price:65, img:'chaat items/Cheese Pav Bhaji.jpg'},
  {id:102, name:'Bhel Puri', cat:'Chaat Items', price:60, img:'chaat items/Bhel Puri.jpg'},
  {id:171, name:'Parcel Bhel Puri', cat:'Chaat Items', price:65, img:'chaat items/Bhel Puri.jpg'},
  {id:103, name:'Murukku Sandwich', cat:'Chaat Items', price:60, img:'chaat items/Murukku Sandwich.jpg'},
  {id:172, name:'Murukku Sandwich', cat:'Chaat Items', price:65, img:'chaat items/Murukku Sandwich.jpg'},
  {id:104, name:'Cheese Murukku Sandwich', cat:'Chaat Items', price:70, img:'chaat items/Cheese Murukku Sandwich.jpg'},
  {id:173, name:'Parcel Cheese Murukku Sandwich', cat:'Chaat Items', price:75, img:'chaat items/Cheese Murukku Sandwich.jpg'},
  {id:105, name:'Khakra Sandwich', cat:'Chaat Items', price:60, img:'chaat items/Khakra Sandwich.jpg'},
  {id:174, name:'Parcel Khakra Sandwich', cat:'Chaat Items', price:65, img:'chaat items/Khakra Sandwich.jpg'},
  {id:106, name:'Cheese Khakra Sandwich', cat:'Chaat Items', price:70, img:'chaat items/Cheese Khakra Sandwich.jpg'},
  {id:175, name:'Parcel Cheese Khakra Sandwich', cat:'Chaat Items', price:75, img:'chaat items/Cheese Khakra Sandwich.jpg'},
  
  // Maggi
  {id:112, name:'Maggi', cat:'Maggi', price:50, img:'maggi/Maggi.jpg'},
  {id:113, name:'Veg Maggi', cat:'Maggi', price:65, img:'maggi/Veg Maggi.jpg'},
  {id:114, name:'Cheese Maggi', cat:'Maggi', price:65, img:'maggi/Cheese Maggi.jpg'},
  {id:115, name:'Peri Peri Maggi', cat:'Maggi', price:60, img:'maggi/Peri Peri Maggi.jpg'},
  {id:116, name:'Schezwan Maggi', cat:'Maggi', price:60, img:'maggi/Schezwan Maggi.jpg'},
  {id:117, name:'Egg Maggi', cat:'Maggi', price:65, img:'maggi/Egg Maggi.jpg'},

  // Ice Cream
  {id:118, name:'Vanilla', cat:'Ice Cream', price:40, img:'icecream/Vanilla.jpg'},
  {id:119, name:'Black Currant', cat:'Ice Cream', price:45, img:'icecream/Mango.jpg'},
  {id:120, name:'Butterscotch', cat:'Ice Cream', price:45, img:'icecream/Butterscotch.jpg'},
  {id:122, name:'Strawberry', cat:'Ice Cream', price:45, img:'icecream/Strawberry.jpg'},
  {id:123, name:'Nuts & Ice Cream', cat:'Ice Cream', price:140, img:'icecream/Nuts & Ice Cream.jpg'},
  {id:124, name:'Mixed Ice Cream', cat:'Ice Cream', price:110, img:'icecream/Mixed Ice Cream.jpg'},

  // Fruit Salad
  {id:125, name:'Fruit Salad', cat:'Fruit Salad', price:60, img:'nuts/Fruit Salad.jpg'},
  {id:126, name:'Fruit Salad With Ice Cream', cat:'Fruit Salad', price:80, img:'nuts/Fruit Salad with Ice Cream.jpg'},
  {id:127, name:'Fruit Salad With Honey', cat:'Fruit Salad', price:70, img:'nuts/Fruit Salad with Honey.jpg'},
  

  // Sandwich & Toast
  {id:129, name:'Veg Sandwich', cat:'Sandwich & Toast', price:70, img:'sandwich_toast/Veg Sandwich.jpg'},
  {id:130, name:'Veg Cheese Sandwich', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Veg Cheese Sandwich.jpg'},
  {id:131, name:'Corn Sandwich', cat:'Sandwich & Toast', price:70, img:'sandwich_toast/Corn Sandwich.jpg'},
  {id:132, name:'Corn Cheese Sandwich', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Corn Cheese Sandwich.jpg'},
  {id:134, name:'Paneer Sandwich', cat:'Sandwich & Toast', price:110, img:'sandwich_toast/Paneer Sandwich.jpg'},
  {id:178, name:'Paneer Cheese Sandwich', cat:'Sandwich & Toast', price:130, img:'sandwich_toast/Paneer Sandwich.jpg'},
  {id:135, name:'Chilly Cheese Toast', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Chilly Cheese Toast.jpg'},
  {id:136, name:'Garlic Cheese Toast', cat:'Sandwich & Toast', price:90, img:'sandwich_toast/Garlic Cheese Toast.jpg'},
  {id:137, name:'Aloo Masala Cheese Toast', cat:'Sandwich & Toast', price:100, img:'sandwich_toast/Aloo Masala Cheese Toast.jpg'},
  {id:138, name:'Chicken Sandwich', cat:'Sandwich & Toast', price:120, img:'sandwich_toast/chicken.jpg'},

  // Fried Items
  {id:139, name:'French Fries', cat:'Fried Items', price:75, img:'fried_items/french fries.jpg'},
  {id:140, name:'Peri Peri French Fries', cat:'Fried Items', price:85, img:'fried_items/peri peri.jpg'},
  {id:142, name:'Cheese French Fries', cat:'Fried Items', price:100, img:'fried_items/Cheese.jpg'},
  {id:143, name:'Chicken Momos Fried', cat:'Fried Items', price:100, img:'fried_items/chicken momos.jpg'},
  {id:144, name:'Veg Momos Fried', cat:'Fried Items', price:85, img:'fried_items/veg momos.jpg'},
  {id:145, name:'Chicken Kievs', cat:'Fried Items', price:95, img:'fried_items/chicken kieves.jpg'},
  {id:146, name:'Chicken Nuggets', cat:'Fried Items', price:100, img:'fried_items/nuggets.jpg'},
  {id:147, name:'Potato Kievs', cat:'Fried Items', price:80, img:'fried_items/potato kieves.jpg'},
  {id:148, name:'Chicken Popcorn', cat:'Fried Items', price:100, img:'fried_items/popcorn.jpg'},
  {id:149, name:'Chicken Cheese Ball', cat:'Fried Items', price:100, img:'fried_items/cutlet.jpg'},
  {id:150, name:'Cheese Ball', cat:'Fried Items', price:80, img:'fried_items/cheese ball.jpg'},
  {id:176, name:'Bread Omelette', cat:'Fried Items', price:50, img:'fried_items/bread.jpg'},
  {id:177, name:'Cheese Bread Omelette', cat:'Fried Items', price:70, img:'fried_items/cheesebread.jpg'},

];

let bills=JSON.parse(localStorage.getItem('ms_bills')||'[]'), curPage=1, perPage=8, curCat='All', sText='', editingId=null;
let currentTable=null; // 'T1'..'T5' - Paper Point 1
let tableOrders={T1:[],T2:[],T3:[],T4:[],T5:[],T6:[],T7:[],T8:[],T9:[],T10:[]}; // 10 Tables - Per-table bill store
let parcelOrders={T1:0,T2:0,T3:0,T4:0,T5:0,T6:0,T7:0,T8:0,T9:0,T10:0}, parcelClicks={T1:0,T2:0,T3:0,T4:0,T5:0,T6:0,T7:0,T8:0,T9:0,T10:0};
let pendingPrintBill=null;
let cart=[]; // alias - always points to currentTable cart
function syncCart(){ if(currentTable) cart=tableOrders[currentTable]; else cart=[]; }
function tableLabel(t){ if(!t) return '-'; return 'T' + t.replace('T',''); }
// Table1 -> T1 ✅, Table2 -> T2 ✅, Table10 -> T10 ✅
function getTodayIST(){ 
  let n = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})); 
  return n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0'); 
}

function getNowIST(){
  return new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
}


setInterval(()=>{ document.getElementById('dt').textContent=getNowIST(); let dh=document.getElementById('dtHome'); if(dh) dh.textContent=getNowIST(); },1000);
function updateBillNo(){ let n='BILL'+String(bills.length+1).padStart(3,'0'); let a=document.getElementById('bno'); if(a)a.textContent=n; let h=document.getElementById('bnoHome'); if(h)h.textContent=n; }
function renderHomeTables(){ let el=document.getElementById('tablesHome'); if(!el) return; el.innerHTML=['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10'].map(t=>{ let items=tableOrders[t]; let cnt=items.reduce((s,x)=>s+x.qty,0); let tot=items.reduce((s,x)=>s+x.qty*x.price,0)+(parcelOrders[t]||0); return `<div class="col-3 col-md-3"><div class="product-box" style="height:96px !important;min-height:96px;padding:8px !important;cursor:pointer;${currentTable===t?'border:2px solid #16a34a !important;background:#f0fdf4':''}" onclick="selectTable('${t}')"><div style="font-size:16px;font-weight:800;">Table ${t.replace('T','')}</div><div style="font-size:11px;color:#666;"></div><div><span class="badge ${cnt?'bg-success':'bg-secondary'}" style="font-size:20px;">${cnt?'Occupied':'Free'}</span></div></div></div>`; }).join(''); }
function selectTable(t){ currentTable=t; syncCart(); let tno=document.getElementById('tno'); if(tno)tno.value=tableLabel(t); let th=document.getElementById('tnoHome'); if(th)th.value=tableLabel(t); let b=document.getElementById('menuTableBadge'); if(b)b.textContent='Table: Table'+t.replace('T','')+' - '+tableLabel(t); renderHomeTables(); renderCart(); showPage('billing'); }
function showHome(){ document.getElementById('homePage').classList.remove('d-none'); document.getElementById('billingPage').classList.add('d-none'); document.getElementById('savedPage').classList.add('d-none'); renderHomeTables(); renderCart(); }

updateBillNo();

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
  if(!currentTable){ alert('Please Select Table!'); showHome(); return; }
  let prod=products.find(x=>x.id==id); if(!prod) return;
  let ex=cart.find(c=>c.id==id); if(ex) ex.qty++; else cart.push({id:prod.id, name:prod.name, price:parseFloat(prod.price), qty:1});
  renderCart();
}
function renderCart(){
  syncCart();
  let tot=cart.reduce((s,c)=>s+c.price*c.qty,0);
  let parcel=currentTable?parcelOrders[currentTable]:0; let clicks=currentTable?parcelClicks[currentTable]:0;
  let rows = cart.length==0 ? '<tr><td colspan="5" class="text-center text-muted py-3">No items - Add from left</td></tr>' : cart.map((c,i)=>{ return `<tr><td>${i+1}</td><td>${c.name}</td><td><button class="btn btn-sm border py-0 px-1" onclick="chg(${i},-1)">-</button> ${c.qty} <button class="btn btn-sm border py-0 px-1" onclick="chg(${i},1)">+</button></td><td>Rs.${c.price*c.qty}</td><td><span class="text-danger" style="cursor:pointer" onclick="rem(${i})"><i class="bi bi-x-circle"></i></span></td></tr>`; }).join('');
  if(parcel>0) rows += `<tr><td></td><td>Parcel Charges</td><td></td><td>Rs.${parcel}</td><td></td></tr>`;
  ['cartBody','cartBodyHome'].forEach(id=>{ let b=document.getElementById(id); if(b) b.innerHTML=rows; });
  ['gt','gtHome'].forEach(id=>{ let e=document.getElementById(id); if(e) e.textContent='Rs. '+(tot+parcel); });
  ['parcelAmt','parcelAmtHome'].forEach(id=>{ let e=document.getElementById(id); if(e) e.textContent=parcel; });
  ['parcelInfo','parcelInfoHome'].forEach(id=>{ let e=document.getElementById(id); if(e) e.textContent=clicks+' clicks'; });
  renderHomeTables();
}
function chg(i,d){ cart[i].qty+=d; if(cart[i].qty<=0) cart.splice(i,1); renderCart(); }
function rem(i){ cart.splice(i,1); renderCart(); }

function saveBill(){
  if(cart.length==0){ alert('Add items first - Cart empty!'); return false; }
  let tnoEl=document.getElementById('tno'); let tno=tnoEl?tnoEl.value:''; 
  if(!tno || tno.trim()==''){ alert('Enter Table Number!'); if(tnoEl) tnoEl.focus(); return false; }
  let billDateEl=document.getElementById('billDate'); let billDateInput=billDateEl?billDateEl.value:'';
  if(billDateEl && !billDateInput){ alert('Select Bill Date 📅'); return false; }
  
  let parcel=currentTable?parcelOrders[currentTable]:0;
  let total=cart.reduce((s,c)=>s+c.price*c.qty,0)+parcel;
  let formattedDate=billDateInput?new Date(billDateInput).toLocaleDateString('en-IN'):new Date().toLocaleDateString('en-IN');
  
  // EDIT MODE CHECK - Same Bill No varanum!
  if(editingId){
    // Old bill-a update pannu - pudhu bill create panna koodathu!
    let idx=bills.findIndex(x=>x.id==editingId);
    if(idx!=-1){
      bills[idx].tableNo=tno;
      bills[idx].billDate=billDateInput||bills[idx].billDate;
      bills[idx].formattedDate=formattedDate;
      bills[idx].items=[...cart];
      bills[idx].total=total;
      bills[idx].count=cart.length;
      bills[idx].date=new Date().toLocaleString('en-IN');
      
      localStorage.setItem('ms_bills', JSON.stringify(bills));
      
      let sm=document.getElementById('successMsg');
      if(sm){
        sm.innerHTML='✅ '+bills[idx].billNo+' Updated Successfully! Table: '+tno+' - Rs.'+total;
        sm.style.display='block';
        sm.classList.add('show');
        setTimeout(()=>{ sm.style.display='none'; sm.classList.remove('show'); }, 5000);
      }
      
      setTimeout(()=>{
        if(currentTable){ tableOrders[currentTable]=[]; parcelOrders[currentTable]=0; parcelClicks[currentTable]=0; syncCart(); }
        editingId=null;
        if(tnoEl) tnoEl.value='';
        let editBox=document.getElementById('editBox'); if(editBox) editBox.classList.add('d-none');
        renderCart(); updateBillNo(); renderSaved();
      }, 600);
      
      return false;
    }
  }
  
  // NEW BILL MODE - Pudhu bill create pannu
  let bnoEl=document.getElementById('bno'); let bno=bnoEl?bnoEl.textContent:'BILL'+String(bills.length+1).padStart(3,'0');
  let bill={id:Date.now(), billNo:bno, billDate:billDateInput, formattedDate:formattedDate, date:getNowIST(), tableNo:tno, items:[...cart], parcelCharge:parcel, total, count:cart.length};
  bills.push(bill);
  localStorage.setItem('ms_bills', JSON.stringify(bills));
  
  let sm=document.getElementById('successMsg');
  if(sm){
    sm.innerHTML='✅ '+bno+' Saved Successfully! Table: '+tno+' - Rs.'+total;
    sm.style.display='block';
    sm.classList.add('show');
    setTimeout(()=>{ sm.style.display='none'; sm.classList.remove('show'); }, 5000);
  }
  
  setTimeout(()=>{
    if(currentTable){ tableOrders[currentTable]=[]; parcelOrders[currentTable]=0; parcelClicks[currentTable]=0; syncCart(); }
    if(tnoEl) tnoEl.value='';
    renderCart(); updateBillNo(); renderSaved();
  }, 600);
  
  return false;
}

function renderSaved(){
  document.getElementById('cnt').textContent=bills.length;
  document.getElementById('cnt2').textContent=bills.length;
  let body=document.getElementById('savedBody');
  if(bills.length==0){ body.innerHTML='<tr><td colspan="6" class="text-center text-muted py-3">No bills yet</td></tr>'; return; }
  // FIXED: use count, not undefined, handle both count and itemsCount
  body.innerHTML=bills.map(b=>{ let itemCount = b.count || b.itemsCount || b.items?.length || 0; return `<tr><td>${b.billNo}</td><td>${b.date}</td><td>${b.tableNo}</td><td>${itemCount} items</td><td>Rs.${b.total}</td><td><button class="btn btn-sm btn-outline-dark me-1" onclick="viewB(${b.id})">View</button><button class="btn btn-sm btn-outline-success me-1" onclick="editB(${b.id})">Edit</button><button class="btn btn-sm btn-outline-danger" onclick="delB(${b.id})">Delete</button></td></tr>`; }).join('');
}
function viewB(id){
  let b=bills.find(x=>x.id==id);
  document.getElementById('rec').innerHTML=`<div class="text-center fw-bold">MS Emporium</div><div class="text-center small">Juices & Snacks</div><hr><div class="d-flex justify-content-between"><span>Bill No:</span><span>${b.billNo}</span></div><div class="d-flex justify-content-between"><span>Date:</span><span>${b.date}</span></div><div class="d-flex justify-content-between"><span>Table No:</span><span>${b.tableNo}</span></div><hr>${b.items.map(i=>`<div class="d-flex justify-content-between"><span>${i.name}</span><span>${i.qty} Rs.${i.price*i.qty}</span></div>`).join('')}<hr><div class="d-flex justify-content-between fw-bold"><span>Total (${b.count||b.itemsCount||0} items)</span><span>Rs.${b.total}</span></div><div class="text-center mt-3 small">Thank you! Visit again<br>MS Emporium</div>`;
  new bootstrap.Modal(document.getElementById('recModal')).show();
}
function editB(id){
  let b=bills.find(x=>x.id==id); if(!b) return;
  cart=b.items.map(i=>({...i})); editingId=b.id;
  document.getElementById('tno').value=b.tableNo=='-'?'':b.tableNo;
  let billDateEl=document.getElementById('billDate'); if(billDateEl) billDateEl.value=b.billDate||getTodayIST();
  document.getElementById('editBno').textContent=b.billNo;
  document.getElementById('editBox').classList.remove('d-none');
  // FIX: Billing page Bill No display-a edit panra bill no va maathu - mara kudadhu!
  let bnoEl=document.getElementById('bno'); if(bnoEl) bnoEl.textContent=b.billNo;
  renderCart(); showPage('billing');
}
function delB(id){ if(confirm('Delete this bill?')){ bills=bills.filter(b=>b.id!=id); localStorage.setItem('ms_bills',JSON.stringify(bills)); updateBillNo(); renderSaved(); } }
function showPage(p){ document.getElementById('homePage').classList.toggle('d-none', true); document.getElementById('billingPage').classList.toggle('d-none', p!='billing'); document.getElementById('savedPage').classList.toggle('d-none', p!='saved'); if(p=='saved') renderSaved(); if(p=='billing' && !currentTable){ /* Menu ku Table thevai - Home ku anuppu */ } }
function downloadReport(){
  if(bills.length==0){ alert('No bills'); return; }
  let txt=''; bills.forEach(b=>{ let c=b.count||b.itemsCount||b.items?.length||0; txt+=`==================================\nMS Emporium\nJUICES & SHAKES - FRESH & COLD\n----------------------------------\nBill No: ${b.billNo}\nDate: ${b.date}\nTable No: ${b.tableNo}\n----------------------------------\nITEM              QTY   AMT\n----------------------------------\n`; b.items.forEach(i=>{ txt+=`${i.name.padEnd(18)} ${String(i.qty).padEnd(4)} Rs.${i.price*i.qty}\n`; }); txt+=`----------------------------------\nTotal (${c} items)        Rs.${b.total}\n----------------------------------\nThank you! Visit again\nMS Emporium\n==================================\n\n`; });
  let blob=new Blob([txt],{type:'text/plain'}); let a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='MS_Emporium_Bills_'+new Date().toLocaleDateString().replace(/\//g,'-')+'.txt'; a.click();
}
renderCats(); renderGrid(); renderSaved(); renderHomeTables(); showHome(); 
let _bd=document.getElementById('billDate'); if(_bd && !_bd.value) _bd.value=getTodayIST(); let _bdh=document.getElementById('billDateHome'); if(_bdh && !_bdh.value) _bdh.value=getTodayIST();
 setInterval(()=>{ let d=document.getElementById('dt'); if(d) d.textContent=new Date().toLocaleString('en-IN'); let dh=document.getElementById('dtHome'); if(dh) dh.textContent=new Date().toLocaleString('en-IN'); },1000);


function printReceipt58mm() {
  const receiptDiv = document.getElementById('rec');
  if (!receiptDiv) { alert('Bill illa!'); return; }
  
  // Modal-a close pannu - print window mattum irukkanum
  let modalEl = document.getElementById('recModal');
  let modal = bootstrap.Modal.getInstance(modalEl);
  if(modal) modal.hide();
  
  const receiptHTML = receiptDiv.innerHTML;
  
  const win = window.open('', '_blank', 'width=380,height=700');
  win.document.write(`
    <html>
    <head>
      <title>MS Emporium - Bill</title>
      <style>
        @page { size: 58mm auto; margin: 0; }
        body { width: 58mm; margin: 0; padding: 3mm; font-family: monospace; font-size: 11px; background: white; color: black; }
        .receipt { width: 54mm; margin: 0 auto; }
        .d-flex { display: flex; justify-content: space-between; }
        .text-center { text-align: center; }
        hr { border-top: 1px dashed #000; margin: 5px 0; }
        .fw-bold { font-weight: bold; }
        .small { font-size: 9px; }
        button { display: none; }
      </style>
    </head>
    <body>
      <div class="receipt">${receiptHTML}</div>
      <script>
        window.onload = function(){ 
          setTimeout(() => { window.print(); window.close(); }, 800);
        }
      <\/script>
    </body>
    </html>
  `);
  win.document.close();
}

function isIOS(){ return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1); }

function openBillModal(){
  document.getElementById('billModal').style.display='flex';
  var pdfBtn = document.getElementById('pdfBtn');
  var hint = document.getElementById('iosHint');
  var printBtn = document.getElementById('printBtn');
  if(isIOS()){
    pdfBtn.style.display='flex';
    hint.style.display='block';
    printBtn.innerHTML='🖨️ Print';
  }else{
    pdfBtn.style.display='none';
    hint.style.display='none';
  }
}

function closeBillModal(){
  document.getElementById('billModal').style.display='none';
}

function handlePrint(){
  var billEl = document.getElementById('rec');
  var text = billEl.innerText;
  if(isIOS()){
    saveAsPDF_iOS();
  }else{
    if(navigator.share){
      navigator.share({title:'MS Emporium Bill', text:text});
    }else{
      window.print();
    }
  }
}

function getBillTextForPDF(b){
  var lines = [];
  lines.push('MS EMPORIUM');
  lines.push('Ph: 7397468500');
  lines.push('------------------------------');
  lines.push('Bill: ' + b.billNo);
  lines.push('Date: ' + (b.date || b.billDate || ''));
  lines.push('Table: ' + (b.tableNo || '-'));
  lines.push('------------------------------');
  b.items.forEach(function(i){
    lines.push(i.name + ' x ' + i.qty);
    lines.push('              Rs.' + (i.price*i.qty));
  });
  if(b.parcelCharge){ lines.push('Parcel Charges  Rs.' + b.parcelCharge); }
  lines.push('------------------------------');
  lines.push('TOTAL  Rs.' + b.total);
  lines.push('Thank you! Visit Again');
  return lines.join('\n');
}

function saveAsPDF_iOS(){
  // Bill Details modal la irundhu varum bodhu
  var b = pendingPrintBill;
  if(!b){
    // View la irundhu paakira bill - rec div la irundhu edu
    var billEl = document.getElementById('rec');
    if(billEl){ alert(''); }
    return;
  }
  savePreviewAsPDF();
}

function savePreviewAsPDF(){
  var b = pendingPrintBill;
  if(!b){ alert('click Save and Print - Preview will open'); return; }
  var billText = getBillTextForPDF(b);
  // jsPDF load aagala na - Safari Share vazhi print pannu
  if(!window.jspdf){
    alert('PDF library load aagala. Safari Share -> Print nu try pannunga. Page-a reload pannitu marubadiyum try pannunga.');
    // Fallback: new window print
    var w = window.open('', '_blank');
    if(w){
      w.document.write('<html><body style="font-family:monospace;white-space:pre-wrap;font-size:18px">'+billText.replace(/</g,'&lt;')+'</body></html>');
      w.document.close();
      setTimeout(function(){ try{ w.print(); }catch(e){} }, 500);
    }
    return;
  }
  try{
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({orientation:'portrait', unit:'mm', format:[58, 200]});
    var W = 58, CX = 29, L = 2, R = 56;
    var y = 7;
    function newPageIfNeeded(){ if(y > 188){ doc.addPage([58,200]); y = 7; } }
    function dashed(){ doc.setFont('courier','bold'); doc.setFontSize(11); doc.text('------------------------------', CX, y, {align:'center'}); y += 5; newPageIfNeeded(); }
    function leftRight(left, right, size, bold){
      doc.setFont('courier', bold?'bold':'normal'); doc.setFontSize(size||12);
      doc.text(left, L, y); doc.text(right, R, y, {align:'right'}); y += 6; newPageIfNeeded();
    }
    // ===== PREVIEW MAARIYE - Header Center =====
    doc.setFont('courier','bold'); doc.setFontSize(16);
    doc.text('MS EMPORIUM', CX, y, {align:'center'}); y += 6;
    doc.setFont('courier','bold'); doc.setFontSize(11);
    doc.text('Ph: 7397468500', CX, y, {align:'center'}); y += 4;
    dashed();
    // Bill info - Preview la vara maari Left label / Right value
    leftRight('Bill:', b.billNo, 12, true);
    leftRight('Date:', b.date || b.billDate || '', 11, false);
    leftRight('Table:', b.tableNo || '-', 12, true);
    dashed();
    // Items - Preview maari: Name full line, aprom x Qty left / Price right
    b.items.forEach(function(i){
      doc.setFont('courier','bold'); doc.setFontSize(13);
      var nameLines = doc.splitTextToSize(i.name, 52);
      nameLines.forEach(function(nl){
        doc.text(nl, L, y); y += 6; newPageIfNeeded();
      });
      leftRight('x ' + i.qty, 'Rs.' + (i.price*i.qty), 13, true);
      y += 1;
    });
    if(b.parcelCharge){ leftRight('Parcel Charges', 'Rs.'+b.parcelCharge, 12, true); }
    dashed();
    // TOTAL - Preview maari perusa bold
    doc.setFont('courier','bold'); doc.setFontSize(16);
    doc.text('TOTAL', L, y); doc.text('Rs.'+b.total, R, y, {align:'right'}); y += 8;
    doc.setFont('courier','bold'); doc.setFontSize(11);
    doc.text('Thank you! Visit Again', CX, y, {align:'center'}); y += 5;
    var fileName = (b.billNo || 'BILL001') + '.pdf';
    try{
      var blob = doc.output('blob');
      var file = new File([blob], fileName, {type:'application/pdf'});
      if(navigator.canShare && navigator.canShare({files:[file]})){
        navigator.share({files:[file], title: fileName, text:'MS Emporium Bill '+b.billNo}).then(function(){
          setTimeout(function(){ if(confirm('PDF Share aachu! Bill-a save pannava? Yes kudutha Table clear aagum.')){ confirmPrintAfterPDF(); } }, 500);
        }).catch(function(){
          doc.save(fileName);
          alert('Share cancel pannitinga. PDF open aana - mela Share icon -> Save to Files nu kudunga.');
        });
        return;
      } else { doc.save(fileName); }
    }catch(e){ doc.save(fileName); }
    setTimeout(function(){
      if(confirm('PDF Download aachu! Ippo bill-a save pannava? Yes kudutha Table clear aagum.')){
        confirmPrintAfterPDF();
      }
    }, 800);
  }catch(e){
    alert('PDF error: ' + e.message);
  }
}

function confirmPrintAfterPDF(){
  if(!pendingPrintBill) return;
  var b = pendingPrintBill;
  document.getElementById('previewModal').style.display='none';
  bills.push(b); localStorage.setItem('ms_bills', JSON.stringify(bills));
  tableOrders[currentTable]=[]; parcelOrders[currentTable]=0; parcelClicks[currentTable]=0; syncCart();
  pendingPrintBill=null; updateBillNo(); renderCart(); renderSaved(); showHome();
  var sm=document.getElementById('successMsgHome'); if(sm){ sm.innerHTML='✅ '+b.billNo+' PDF Saved! Print the File....'; sm.style.display='block'; setTimeout(()=>sm.style.display='none',5000); }
}
 

function saveAndPrint(){
  if(!currentTable){ alert('Please Select Table!'); showHome(); return false; }
  if(cart.length==0){ alert('Add items first!'); return false; }
 // Table Number - 3 edathula irundhu edukkum - undefined varathu!
let tnoInput = document.getElementById('tno')?.value || document.getElementById('tnoHome')?.value || '';
let tno = tnoInput || tableLabel(currentTable) || '-';
if(tno==='-' || !tno){ alert('Table select pannunga! Home la Table 1 click pannunga'); showHome(); return false; }
let billDateEl=document.getElementById('billDate');
  let billDateInput=billDateEl?billDateEl.value:'';
  if(!billDateInput){ alert('Select Bill Date'); return false; }
  let parcel=parcelOrders[currentTable]||0; let total=cart.reduce((s,c)=>s+c.price*c.qty,0)+parcel;
  let bno=document.getElementById('bno')?document.getElementById('bno').textContent:'BILL'+String(bills.length+1).padStart(3,'0');
  pendingPrintBill={id:Date.now(), billNo:bno, billDate:billDateInput, date:getNowIST(), tableNo:tno, items:JSON.parse(JSON.stringify(cart)), parcelCharge:parcel, total, count:cart.length};
  // PRINT PREVIEW POPUP - Print ku munnadi
  let pb=document.getElementById('previewBody');
  pb.innerHTML=`<div class="d-flex justify-content-between"><span>Bill No</span><b>${bno}</b></div><div class="d-flex justify-content-between"><span>Date</span><span>${pendingPrintBill.date}</span></div><div class="d-flex justify-content-between"><span>Table</span><b>${tno}</b></div><hr>${pendingPrintBill.items.map(i=>`<div class="d-flex justify-content-between"><span>${i.name} x ${i.qty}</span><span>Rs.${i.price*i.qty}</span></div>`).join('')}${parcel?`<div class="d-flex justify-content-between"><span>Parcel Charges</span><span>Rs.${parcel}</span></div>`:''}<hr><div class="d-flex justify-content-between fw-bold fs-5"><span>Total</span><span>Rs.${total}</span></div>`;
  document.getElementById('previewModal').style.display='flex';
  return false;
}
function closePreview(){ document.getElementById('previewModal').style.display='none'; pendingPrintBill=null; }
function confirmPrint(){
  if(!pendingPrintBill) return; let b=pendingPrintBill; document.getElementById('previewModal').style.display='none';
  bills.push(b); localStorage.setItem('ms_bills', JSON.stringify(bills));
  // Print window - 58mm
 let w=window.open('','_blank'); if(w){ w.document.write(`<html><head><style>
@page{size:58mm auto;margin:0}
body{font-family:monospace;width:58mm;margin:0 auto;padding:2mm;text-align:center;font-size:16px;line-height:1.4;color:#000}
h3{font-size:22px;margin:2px 0}
p{font-size:15px;margin:2px 0}
div{font-size:16px}
</style></head><body><h3>MS EMPORIUM</h3><p>Ph: 7397468500</p><hr><p style="text-align:left;font-size:13px">Bill: ${b.billNo}<br>Date: ${b.date}<br>Table: ${b.tableNo || '-'}</p><hr>
${b.items.map(i=>`<div class="item" style="display:flex;justify-content:space-between;align-items:flex-start;gap:4px;margin:4px 0;text-align:left"><span style="font-size:16px;font-weight:600;word-wrap:break-word;flex:1">${i.name} x ${i.qty}</span><span style="font-size:16px;white-space:nowrap;padding-left:4px">Rs.${i.price*i.qty}</span></div>`).join('')}
${b.parcelCharge?`<div style="display:flex;justify-content:space-between;font-size:16px">Parcel Charges <span>Rs.${b.parcelCharge}</span></div>`:''}<hr><div style="display:flex;justify-content:space-between;font-weight:bold;font-size:19px">TOTAL <span>Rs.${b.total}</span></div><p style="font-size:15px">Thank you! Visit Again</p></body></html>`); w.document.close(); setTimeout(()=>{ try{w.print()}catch(e){} },500); }
  // Table clear - Point 5/6: indha table mattum clear, vera table safe
  tableOrders[currentTable]=[]; parcelOrders[currentTable]=0; parcelClicks[currentTable]=0; syncCart();
  pendingPrintBill=null; updateBillNo(); renderCart(); renderSaved(); showHome();
  let sm=document.getElementById('successMsgHome'); if(sm){ sm.innerHTML='✅ '+b.billNo+' Saved & Print aachu! Table: '+b.tableNo; sm.style.display='block'; setTimeout(()=>sm.style.display='none',4000); }
}
