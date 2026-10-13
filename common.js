const KEY='hrfs_separated_demo_v3';
const seed={
 receipts:[
  {id:1001,date:'2026-10-12',fuel:'Pertalite',planned:500,actual:500,staff:'Petugas Demo',ref:'SJ-PT-1210',notes:'Contoh penerimaan sesuai dokumen pengiriman.',status:'Terverifikasi',published:true},
  {id:1002,date:'2026-10-12',fuel:'Biosolar',planned:300,actual:280,staff:'Petugas Demo',ref:'SJ-BS-1210',notes:'Contoh selisih 20 liter; perlu pemeriksaan dokumen.',status:'Perlu verifikasi',published:false},
  {id:1003,date:'2026-10-11',fuel:'Pertalite',planned:450,actual:430,staff:'Petugas Demo',ref:'SJ-PT-1110',notes:'Contoh selisih untuk latihan verifikasi.',status:'Perlu verifikasi',published:false}
 ],
 simulations:[
  {id:3001,date:'2026-10-12',fuel:'Pertalite',location:'SPBU Apung Dermaga A (simulasi)',planned:500,actual:450},
  {id:3002,date:'2026-10-11',fuel:'Biosolar',location:'SPBU Apung Dermaga B (simulasi)',planned:300,actual:280}
 ],
 complaints:[{id:2001,date:'2026-10-12',category:'Jadwal pasokan tidak sesuai',description:'Contoh pengaduan demo: informasi jadwal perlu dikonfirmasi.',contact:'',status:'Diterima'}],
 stock:{Pertalite:{volume:680,capacity:1000},Biosolar:{volume:420,capacity:1000}}
};
function cloneSeed(){return JSON.parse(JSON.stringify(seed))}
function load(){
 try {
  const raw=localStorage.getItem(KEY);
  if(!raw){const d=cloneSeed();localStorage.setItem(KEY,JSON.stringify(d));return d}
  const d=JSON.parse(raw);
  if(!d||!Array.isArray(d.receipts)||!Array.isArray(d.complaints)||!d.stock) throw new Error('Data demo tidak valid');
  if(!Array.isArray(d.simulations)) d.simulations=[];
  return d;
 } catch(e){const d=cloneSeed();try{localStorage.setItem(KEY,JSON.stringify(d))}catch(_){}return d}
}
let db=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(db));return true}catch(e){alert('Browser tidak dapat menyimpan data demo. Coba buka situs melalui HTTPS hosting, bukan mode privat.');return false}}
function resetDemoData(){if(confirm('Kembalikan data demo ke contoh awal? Data yang Anda tambahkan akan dihapus.')){db=cloneSeed();save();location.reload()}}
function refreshDb(){db=load();if(typeof render==='function')render();if(typeof renderMetrics==='function')renderMetrics()}
window.addEventListener('storage',e=>{if(e.key===KEY)refreshDb()});
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function nf(n){return Number(n||0).toLocaleString('id-ID')}
function df(s){return s?new Date(s+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}):'-'}
function pill(s){const cls=s==='Terverifikasi'?'green':s==='Ditolak'?'red':'orange';return '<span class="tag '+cls+'">'+esc(s)+'</span>'}
