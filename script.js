// MathQuest SMK — upgraded learning/game engine
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyORfzLEV-OoAhc4CldMORwGFMZoDtjvsFYW8ZCl9IM4M1cEgOVae8gdSNLRz5mS7TdHw/exec";

const questionBank = {
10: [
{topic:"Persamaan Linear",difficulty:"Mudah",q:"Jika 3x + 7 = 22, maka nilai x adalah ...",choices:["3","5","7","9"],answer:1,xp:100,formula:"ax+b=c → x=(c-b)/a",explain:["3x+7=22","3x=22−7=15","x=15/3=5"],tip:"Pindahkan konstanta ke ruas kanan, lalu bagi dengan koefisien x."},
{topic:"Persamaan Linear",difficulty:"Mudah",q:"Hasil dari 2(3x − 4) = 16 adalah ...",choices:["2","3","4","6"],answer:2,xp:100,formula:"Distribusikan: a(bx+c)=abx+ac",explain:["2(3x−4)=16","6x−8=16","6x=24","x=4"],tip:"Kerjakan perkalian di dalam kurung terlebih dahulu."},
{topic:"Eksponen",difficulty:"Sedang",q:"Nilai 2³ × 2² adalah ...",choices:["16","24","32","64"],answer:2,xp:120,formula:"aᵐ × aⁿ = aᵐ⁺ⁿ",explain:["2³×2²=2^(3+2)","=2⁵","=32"],tip:"Jika basis sama dan dikali, pangkat dijumlahkan."},
{topic:"Persentase",difficulty:"Mudah",q:"Barang Rp200.000 mendapat diskon 15%. Harga setelah diskon adalah ...",choices:["Rp160.000","Rp170.000","Rp175.000","Rp185.000"],answer:1,xp:100,formula:"Harga akhir = harga awal × (1 − diskon)",explain:["Diskon=15%×200.000=30.000","Harga akhir=200.000−30.000","=Rp170.000"],tip:"Ubah persen menjadi desimal sebelum menghitung."},
{topic:"Fungsi",difficulty:"Sedang",q:"Jika f(x)=2x+3, maka f(4)= ...",choices:["7","9","11","12"],answer:2,xp:120,formula:"f(a) = masukkan x=a ke fungsi",explain:["f(4)=2(4)+3","=8+3","=11"],tip:"Ganti setiap x dengan nilai yang diminta."},
{topic:"Geometri",difficulty:"Mudah",q:"Luas persegi panjang dengan panjang 12 cm dan lebar 5 cm adalah ...",choices:["17 cm²","34 cm²","60 cm²","120 cm²"],answer:2,xp:100,formula:"L = p × l",explain:["L=12×5","=60 cm²"],tip:"Pastikan satuan luas menggunakan cm²."},
{topic:"Statistika",difficulty:"Sedang",q:"Mean dari 6, 8, 10, 12, 14 adalah ...",choices:["8","9","10","12"],answer:2,xp:120,formula:"Mean = jumlah seluruh data / banyak data",explain:["Jumlah=6+8+10+12+14=50","n=5","Mean=50/5=10"],tip:"Jumlahkan data dulu, kemudian bagi banyaknya data."},
{topic:"Peluang",difficulty:"Sedang",q:"Sebuah dadu dilempar sekali. Peluang muncul bilangan genap adalah ...",choices:["1/6","1/3","1/2","2/3"],answer:2,xp:120,formula:"P(A)=n(A)/n(S)",explain:["Hasil genap={2,4,6}, ada 3","Semesta ada 6","P=3/6=1/2"],tip:"Hitung kejadian yang diinginkan dan seluruh kemungkinan."},
{topic:"Trigonometri",difficulty:"Sedang",q:"Nilai sin 30° adalah ...",choices:["0","1/2","√2/2","1"],answer:1,xp:120,formula:"sin θ = sisi depan / sisi miring",explain:["Nilai sudut istimewa 30°","sin 30°=1/2"],tip:"Hafalkan pasangan sudut istimewa 30°, 45°, dan 60°."},
{topic:"Barisan Aritmetika",difficulty:"Sedang",q:"Barisan 3, 7, 11, 15, ... memiliki suku ke-10 sebesar ...",choices:["35","39","43","47"],answer:1,xp:130,formula:"Uₙ = a + (n−1)b",explain:["a=3, b=4","U₁₀=3+(10−1)4","=3+36=39"],tip:"Cari beda antar suku terlebih dahulu."},
{topic:"Eksponen",difficulty:"Sedang",q:"Jika 5ˣ = 125, maka x = ...",choices:["2","3","4","5"],answer:1,xp:120,formula:"Jika aˣ=b, cari pangkat yang menghasilkan b",explain:["125=5×5×5=5³","Maka 5ˣ=5³","x=3"],tip:"Ubah bilangan menjadi bentuk pangkat dengan basis yang sama."},
{topic:"SPLDV",difficulty:"Sedang",q:"Jika x+y=10 dan x−y=2, nilai x adalah ...",choices:["4","5","6","8"],answer:2,xp:130,formula:"Eliminasi/substitusi dua persamaan",explain:["(x+y)+(x−y)=10+2","2x=12","x=6"],tip:"Menjumlahkan kedua persamaan menghilangkan y."}
],
11: [
{topic:"Matriks",difficulty:"Sedang",q:"Jika A=[[2,1],[3,4]], determinan A adalah ...",choices:["5","8","11","14"],answer:0,xp:130,formula:"det([[a,b],[c,d]])=ad−bc",explain:["det(A)=2×4−1×3","=8−3=5"],tip:"Untuk matriks 2×2, kalikan diagonal utama lalu kurangi diagonal lainnya."},
{topic:"Fungsi Komposisi",difficulty:"Sedang",q:"f(x)=2x dan g(x)=x+3. Nilai (f∘g)(2) adalah ...",choices:["7","8","10","12"],answer:2,xp:140,formula:"(f∘g)(x)=f(g(x))",explain:["g(2)=2+3=5","f(5)=2×5=10"],tip:"Kerjakan fungsi yang paling dalam terlebih dahulu."},
{topic:"Turunan",difficulty:"Sedang",q:"Turunan f(x)=x²+4x−1 adalah ...",choices:["x+4","2x+4","2x−1","x²+4"],answer:1,xp:140,formula:"d(xⁿ)/dx = n xⁿ⁻¹",explain:["d(x²)=2x","d(4x)=4","d(−1)=0","f'(x)=2x+4"],tip:"Konstanta memiliki turunan nol."},
{topic:"Limit",difficulty:"Sulit",q:"lim x→2 (x²−4)/(x−2) adalah ...",choices:["2","3","4","6"],answer:2,xp:160,formula:"a²−b²=(a−b)(a+b)",explain:["x²−4=(x−2)(x+2)","Coret (x−2)","lim x→2 (x+2)=4"],tip:"Jika substitusi langsung menghasilkan 0/0, coba faktorkan."},
{topic:"Statistika",difficulty:"Sedang",q:"Median data 4, 7, 8, 10, 12, 15, 18 adalah ...",choices:["7","8","10","12"],answer:2,xp:130,formula:"Median data ganjil = data ke-(n+1)/2",explain:["n=7","Posisi median=(7+1)/2=4","Data ke-4=10"],tip:"Urutkan data terlebih dahulu."},
{topic:"Peluang",difficulty:"Sulit",q:"Peluang mengambil kartu As dari 52 kartu adalah ...",choices:["1/13","1/26","4/13","1/4"],answer:0,xp:150,formula:"P(A)=kejadian yang diinginkan/total kejadian",explain:["Ada 4 kartu As","Total kartu=52","P=4/52=1/13"],tip:"Sederhanakan pecahan hasil peluang."},
{topic:"Trigonometri",difficulty:"Sedang",q:"Jika tan θ=3/4 dan θ lancip, maka sin θ= ...",choices:["3/5","4/5","3/4","5/4"],answer:0,xp:140,formula:"tan θ=depan/samping, lalu sin θ=depan/miring",explain:["Segitiga memiliki sisi 3 dan 4","Miring=√(3²+4²)=5","sin θ=3/5"],tip:"Gunakan Teorema Pythagoras untuk mencari sisi miring."},
{topic:"Program Linear",difficulty:"Sedang",q:"Titik yang memenuhi x≥0, y≥0, x+y≤5 adalah ...",choices:["(2,2)","(3,3)","(−1,2)","(4,2)"],answer:0,xp:130,formula:"Uji titik pada semua pertidaksamaan",explain:["(2,2): x≥0 ✓, y≥0 ✓","x+y=4≤5 ✓","Jadi (2,2) memenuhi"],tip:"Satu titik harus memenuhi seluruh syarat sekaligus."},
{topic:"Eksponensial",difficulty:"Sedang",q:"Jika 2ˣ=32, maka x= ...",choices:["4","5","6","8"],answer:1,xp:120,formula:"aˣ=b → ubah b menjadi pangkat a",explain:["32=2⁵","2ˣ=2⁵","x=5"],tip:"Samakan basis kedua ruas."},
{topic:"Logaritma",difficulty:"Sedang",q:"Nilai log₂16 adalah ...",choices:["2","3","4","8"],answer:2,xp:130,formula:"logₐ b = c ⇔ aᶜ=b",explain:["log₂16=c berarti 2ᶜ=16","16=2⁴","c=4"],tip:"Tanyakan: 2 pangkat berapa menghasilkan 16?"},
{topic:"Turunan",difficulty:"Sedang",q:"Jika f(x)=3x²−5x+2, maka f'(2)= ...",choices:["5","7","9","11"],answer:1,xp:145,formula:"Turunkan f(x), lalu substitusikan x=2",explain:["f'(x)=6x−5","f'(2)=12−5","=7"],tip:"Jangan langsung memasukkan x=2 sebelum menurunkan."},
{topic:"Barisan Geometri",difficulty:"Sedang",q:"Barisan 2, 6, 18, ... memiliki suku ke-5 sebesar ...",choices:["54","108","162","486"],answer:2,xp:140,formula:"Uₙ=a·rⁿ⁻¹",explain:["a=2, r=3","U₅=2×3⁴","=2×81=162"],tip:"Cari rasio dengan membagi suku berikutnya oleh suku sebelumnya."}
],
12: [
{topic:"Turunan",difficulty:"Sedang",q:"Jika f(x)=3x³−2x²+x, maka f'(x)= ...",choices:["9x²−4x+1","9x²−2x+1","3x²−4x+1","9x³−4x"],answer:0,xp:160,formula:"d(xⁿ)/dx=nxⁿ⁻¹",explain:["d(3x³)=9x²","d(−2x²)=−4x","d(x)=1","f'(x)=9x²−4x+1"],tip:"Turunkan setiap suku secara terpisah."},
{topic:"Integral",difficulty:"Sedang",q:"∫ 2x dx = ...",choices:["x²+C","2x²+C","x²/2+C","2+C"],answer:0,xp:150,formula:"∫ xⁿ dx = xⁿ⁺¹/(n+1)+C",explain:["∫2x dx=2·x²/2+C","=x²+C"],tip:"Integral tak tentu selalu memiliki +C."},
{topic:"Integral",difficulty:"Sulit",q:"∫₀² x dx = ...",choices:["1","2","3","4"],answer:1,xp:170,formula:"∫ₐᵇ f(x)dx = F(b)−F(a)",explain:["∫x dx=x²/2","[x²/2]₀²=4/2−0","=2"],tip:"Cari antiturunan dulu, kemudian gunakan batas atas dan bawah."},
{topic:"Limit",difficulty:"Sulit",q:"lim x→0 (sin x)/x = ...",choices:["0","1","∞","Tidak ada"],answer:1,xp:180,formula:"lim x→0 sin x/x = 1",explain:["Ini adalah limit fundamental trigonometri","Nilainya=1"],tip:"Ingat identitas limit fundamental ini (sudut dalam radian)."},
{topic:"Matriks",difficulty:"Sulit",q:"Jika I adalah matriks identitas berordo 2, maka det(I)= ...",choices:["0","1","2","−1"],answer:1,xp:150,formula:"det([[1,0],[0,1]])=1×1−0×0",explain:["I=[[1,0],[0,1]]","det(I)=1−0","=1"],tip:"Determinan matriks identitas selalu 1."},
{topic:"Vektor",difficulty:"Sedang",q:"Panjang vektor (3,4) adalah ...",choices:["3","4","5","7"],answer:2,xp:140,formula:"|v|=√(x²+y²)",explain:["|v|=√(3²+4²)","=√25","=5"],tip:"Anggap komponen vektor sebagai sisi siku-siku."},
{topic:"Peluang",difficulty:"Sulit",q:"Dua dadu dilempar. Banyak kemungkinan hasil berurutan adalah ...",choices:["12","24","36","42"],answer:2,xp:150,formula:"n(S)=6×6 untuk dua dadu",explain:["Dadu pertama memiliki 6 kemungkinan","Dadu kedua memiliki 6 kemungkinan","6×6=36"],tip:"Gunakan aturan perkalian untuk kejadian bertahap."},
{topic:"Barisan Aritmetika",difficulty:"Sedang",q:"Jumlah 10 suku pertama barisan 2,5,8,... adalah ...",choices:["145","150","155","160"],answer:2,xp:160,formula:"Sₙ=n/2[2a+(n−1)b]",explain:["a=2,b=3,n=10","S₁₀=10/2[4+27]","=5×31=155"],tip:"Identifikasi a, b, dan n sebelum memasukkan ke rumus."},
{topic:"Logaritma",difficulty:"Sedang",q:"Jika log₁₀x=3, maka x= ...",choices:["30","100","300","1000"],answer:3,xp:140,formula:"logₐb=c ⇔ aᶜ=b",explain:["log₁₀x=3","x=10³","x=1000"],tip:"Ubah bentuk logaritma menjadi bentuk eksponen."},
{topic:"Geometri",difficulty:"Sedang",q:"Volume tabung r=7 cm dan t=10 cm, π=22/7, adalah ...",choices:["770 cm³","1.100 cm³","1.540 cm³","2.200 cm³"],answer:2,xp:150,formula:"V=πr²t",explain:["V=(22/7)×7²×10","=(22/7)×49×10","=1540 cm³"],tip:"Sederhanakan r² dengan penyebut π terlebih dahulu."},
{topic:"Turunan",difficulty:"Sulit",q:"Gradien garis singgung y=x²+2x−3 saat x=2 adalah ...",choices:["4","5","6","7"],answer:2,xp:165,formula:"Gradien garis singgung = f'(x)",explain:["f'(x)=2x+2","f'(2)=4+2","=6"],tip:"Untuk mencari gradien kurva di suatu titik, gunakan turunan."},
{topic:"Integral",difficulty:"Sedang",q:"∫(3x²+2)dx = ...",choices:["x³+2x+C","3x³+2x+C","x³+2+C","6x+C"],answer:0,xp:155,formula:"Integralkan tiap suku: ∫xⁿdx=xⁿ⁺¹/(n+1)+C",explain:["∫3x²dx=x³","∫2dx=2x","Hasil=x³+2x+C"],tip:"Cek dengan menurunkan kembali jawabanmu."}
]};

const lessons = {
10:{
"Persamaan Linear":{summary:"Persamaan linear satu variabel adalah persamaan dengan pangkat tertinggi variabel 1.",formulas:["ax+b=c → x=(c−b)/a","Gunakan operasi yang sama pada kedua ruas."],example:"2x+6=14 → 2x=8 → x=4",notes:["Distribusikan tanda kurung.","Kumpulkan suku x di satu ruas dan konstanta di ruas lain."]},
"Eksponen":{summary:"Eksponen menyatakan perkalian berulang dengan basis yang sama.",formulas:["aᵐ×aⁿ=aᵐ⁺ⁿ","aᵐ/aⁿ=aᵐ⁻ⁿ","(aᵐ)ⁿ=aᵐⁿ"],example:"2³×2²=2⁵=32",notes:["Syarat penting: basis sama untuk aturan penjumlahan/pengurangan pangkat."]},
"Fungsi":{summary:"Fungsi memasangkan setiap input dengan tepat satu output.",formulas:["f(x)=aturan fungsi","f(a): ganti x dengan a"],example:"f(x)=3x−1 → f(4)=3(4)−1=11",notes:["Baca notasi f(4) sebagai nilai fungsi saat x=4."]},
"Statistika":{summary:"Statistika membantu meringkas dan membaca data.",formulas:["Mean=Σx/n","Median=data tengah setelah diurutkan"],example:"Data 4,6,8 → mean=(4+6+8)/3=6",notes:["Urutkan data sebelum mencari median."]},
"Peluang":{summary:"Peluang mengukur kemungkinan terjadinya suatu kejadian.",formulas:["P(A)=n(A)/n(S)","0≤P(A)≤1"],example:"Peluang genap pada dadu=3/6=1/2",notes:["Pastikan semua hasil dalam ruang sampel diperhitungkan."]},
"Trigonometri":{summary:"Perbandingan trigonometri menghubungkan sisi dan sudut pada segitiga siku-siku.",formulas:["sin=depan/miring","cos=samping/miring","tan=depan/samping"],example:"Segitiga 3-4-5 → sin θ=3/5",notes:["Gunakan SOH-CAH-TOA sebagai pengingat."]}
},
11:{
"Matriks":{summary:"Matriks adalah susunan bilangan berbentuk baris dan kolom.",formulas:["det([[a,b],[c,d]])=ad−bc","Matriks dapat digunakan untuk sistem persamaan."],example:"det([[2,1],[3,4]])=8−3=5",notes:["Perhatikan urutan baris dan kolom."]},
"Fungsi Komposisi":{summary:"Komposisi menggabungkan dua fungsi secara berurutan.",formulas:["(f∘g)(x)=f(g(x))"],example:"g(2)=5 lalu f(5)=10",notes:["Kerjakan fungsi paling dalam terlebih dahulu."]},
"Turunan":{summary:"Turunan menyatakan laju perubahan atau gradien kurva.",formulas:["d(xⁿ)/dx=nxⁿ⁻¹","d(c)/dx=0"],example:"f(x)=x²+4x → f'(x)=2x+4",notes:["Turunkan suku per suku."]},
"Limit":{summary:"Limit menyatakan nilai yang didekati fungsi ketika x mendekati suatu nilai.",formulas:["a²−b²=(a−b)(a+b)","lim x→0 sin x/x=1"],example:"lim x→2 (x²−4)/(x−2)=4",notes:["Coba substitusi; jika 0/0, sederhanakan/faktorkan."]},
"Program Linear":{summary:"Program linear mencari solusi terbaik dengan kendala pertidaksamaan linear.",formulas:["Uji titik terhadap semua kendala","Nilai optimum biasanya diperiksa pada titik pojok"],example:"(2,2) memenuhi x≥0,y≥0,x+y≤5",notes:["Gambar daerah feasible bila diperlukan."]},
"Barisan Geometri":{summary:"Barisan geometri memiliki rasio tetap antar suku.",formulas:["Uₙ=a·rⁿ⁻¹"],example:"2,6,18 → a=2,r=3 → U₅=162",notes:["Rasio = suku berikutnya / suku sebelumnya."]}
},
12:{
"Turunan":{summary:"Turunan dipakai untuk gradien, laju perubahan, dan analisis fungsi.",formulas:["d(xⁿ)/dx=nxⁿ⁻¹","f'(a)=gradien di x=a"],example:"f=x²+2x → f'=2x+2",notes:["Turunkan dulu, substitusi nilai x setelahnya."]},
"Integral":{summary:"Integral adalah antiturunan dan juga dapat digunakan untuk luas di bawah kurva.",formulas:["∫xⁿdx=xⁿ⁺¹/(n+1)+C","∫ₐᵇf(x)dx=F(b)−F(a)"],example:"∫2x dx=x²+C",notes:["Integral tak tentu memiliki +C. Integral tentu memakai batas."]},
"Limit":{summary:"Limit menjadi dasar kontinuitas dan kalkulus.",formulas:["lim x→0 sin x/x=1","Faktorisasi dapat mengatasi bentuk 0/0"],example:"lim x→0 sin x/x=1",notes:["Sudut pada limit trigonometri fundamental dinyatakan dalam radian."]},
"Matriks":{summary:"Matriks dapat digunakan untuk transformasi dan sistem persamaan.",formulas:["det([[a,b],[c,d]])=ad−bc","det(I)=1"],example:"det([[1,0],[0,1]])=1",notes:["Matriks identitas memiliki 1 di diagonal utama dan 0 di tempat lain."]},
"Vektor":{summary:"Vektor memiliki besar dan arah.",formulas:["|v|=√(x²+y²)","Gunakan Pythagoras untuk komponen 2D"],example:"|(3,4)|=5",notes:["Pisahkan komponen x dan y."]},
"Barisan Aritmetika":{summary:"Barisan aritmetika memiliki beda konstan.",formulas:["Uₙ=a+(n−1)b","Sₙ=n/2[2a+(n−1)b]"],example:"2,5,8 → b=3",notes:["Bedakan rumus suku ke-n dan jumlah n suku."]},
"Logaritma":{summary:"Logaritma adalah kebalikan operasi eksponen.",formulas:["logₐb=c ⇔ aᶜ=b"],example:"log₁₀x=3 → x=1000",notes:["Syarat basis: a>0 dan a≠1."]}
}};

let state={grade:10,mode:"campuran",questions:[],index:0,score:0,xp:0,correct:0,streak:0,timer:30,timerId:null,startedAt:null,hints:2,hintsUsed:0};
const $=id=>document.getElementById(id);
const shuffle=a=>[...a].sort(()=>Math.random()-0.5);
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function makeQuestions(){let bank=shuffle(questionBank[state.grade]);state.questions=bank.slice(0,Math.min(10,bank.length));}
function startGame(){state.grade=Number($("gradeSelect").value);state.mode=$("modeSelect").value;state.index=0;state.score=0;state.xp=0;state.correct=0;state.streak=0;state.hints=2;state.hintsUsed=0;$("score").textContent=0;$("streak").textContent="0🔥";makeQuestions();state.startedAt=new Date();showScreen("gameScreen");renderQuestion();}
function renderQuestion(){
 clearInterval(state.timerId); const q=state.questions[state.index];
 $("questionNo").textContent=state.index+1;$("totalQuestions").textContent=state.questions.length;$("progressBar").style.width=`${(state.index/state.questions.length)*100}%`;
 $("topicPill").textContent=q.topic;$("difficulty").textContent=q.difficulty;$("xp").textContent=`+${q.xp} XP`;$("questionText").textContent=q.q;
 $("feedback").className="feedback";$("feedback").textContent="";$("solutionBox").classList.add("hidden");$("hintBox").classList.add("hidden");$("hintBox").textContent="";$("nextBtn").classList.add("hidden");$("choices").innerHTML="";
 $("hintBtn").disabled=state.hints<=0;$("hintCount").textContent=`${state.hints} tersedia`;
 q.choices.forEach((choice,i)=>{const b=document.createElement("button");b.className="choice";b.textContent=`${String.fromCharCode(65+i)}. ${choice}`;b.onclick=()=>answerQuestion(i);$("choices").appendChild(b);});
 state.timer=state.mode==="cepat"?15:state.mode==="latihan"?90:30;$("timer").textContent=state.timer;
 state.timerId=setInterval(()=>{state.timer--;$("timer").textContent=state.timer;if(state.timer<=0){clearInterval(state.timerId);answerQuestion(-1);}},1000);
}
function useHint(){
 if(state.hints<=0)return; state.hints--;state.hintsUsed++;const q=state.questions[state.index];
 $("hintBox").classList.remove("hidden");$("hintBox").innerHTML=`<b>💡 Petunjuk rumus</b><div class="formula">${q.formula}</div><p>Gunakan rumus tersebut untuk menentukan langkahmu. <b>Tidak ada jawaban yang ditampilkan.</b></p>`;
 $("hintCount").textContent=`${state.hints} tersedia`;$("hintBtn").disabled=state.hints<=0;
}
function answerQuestion(selected){
 clearInterval(state.timerId);const q=state.questions[state.index];const buttons=[...document.querySelectorAll(".choice")];buttons.forEach(b=>b.disabled=true);buttons[q.answer]?.classList.add("correct");
 const correct=selected===q.answer;
 if(correct){state.correct++;state.streak++;const bonus=Math.max(0,state.streak-1)*10;state.xp+=q.xp+bonus;state.score+=100+bonus+Math.max(0,state.timer)*3;$("feedback").className="feedback good";$("feedback").textContent=`✅ Benar! +${q.xp+bonus} XP`;}
 else{state.streak=0;if(selected>=0)buttons[selected].classList.add("wrong");$("feedback").className="feedback bad";$("feedback").textContent=selected<0?"⏰ Waktu habis.":`❌ Belum tepat.`;}
 $("score").textContent=state.score;$("streak").textContent=`${state.streak}🔥`;
 // Pembahasan hanya di Mode Santai.
 if(state.mode==="latihan"){
   $("solutionBox").classList.remove("hidden");
   $("solutionBox").innerHTML=`<div class="solution-title">📚 Cara Penyelesaian</div><div><b>Rumus:</b> ${q.formula}</div><ol>${q.explain.map(x=>`<li>${x}</li>`).join("")}</ol><div class="tip"><b>Tips:</b> ${q.tip}</div><div class="answer-reveal"><b>Jawaban benar:</b> ${q.choices[q.answer]}</div>`;
 }
 $("nextBtn").classList.remove("hidden");
}
function nextQuestion(){state.index++;if(state.index>=state.questions.length)finishGame();else renderQuestion();}
function finishGame(){clearInterval(state.timerId);const accuracy=Math.round(state.correct/state.questions.length*100);$("progressBar").style.width="100%";$("finalScore").textContent=state.score;$("finalCorrect").textContent=`${state.correct}/${state.questions.length}`;$("finalAccuracy").textContent=`${accuracy}%`;$("finalXP").textContent=state.xp;$("resultMessage").textContent=accuracy>=80?"Luar biasa! Konsepmu sudah kuat. 🚀":accuracy>=60?"Bagus! Teruskan latihan untuk memperkuat konsep. 💪":"Tidak apa-apa—kembali ke Akademi, pelajari rumus, lalu coba lagi. 📚";showScreen("resultScreen");saveResult(accuracy);}
async function saveResult(accuracy){if(!GOOGLE_SCRIPT_URL){$("saveStatus").textContent="ℹ️ Google Sheet belum dikonfigurasi. Isi GOOGLE_SCRIPT_URL di script.js.";return;}$("saveStatus").textContent="⏳ Menyimpan hasil ke Google Sheet...";const payload={timestamp:new Date().toISOString(),nama:localStorage.getItem("mathquest_nama")||"Pemain",kelas:state.grade,mode:state.mode,skor:state.score,benar:state.correct,total:state.questions.length,akurasi:accuracy,xp:state.xp,hintUsed:state.hintsUsed};try{await fetch(GOOGLE_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload)});$("saveStatus").textContent="✅ Hasil dikirim ke Google Sheet."}catch(e){$("saveStatus").textContent="⚠️ Gagal mengirim hasil. Periksa URL Apps Script.";}}
function populateTopics(){const g=Number($("studyGrade").value);const topics=Object.keys(lessons[g]);$("topicSelect").innerHTML=topics.map(t=>`<option value="${t}">${t}</option>`).join("");renderLesson();}
function renderLesson(){const g=Number($("studyGrade").value),t=$("topicSelect").value,l=lessons[g][t];if(!l)return;$("lessonContent").innerHTML=`<div class="lesson-tag">Kelas ${g} • ${t}</div><h3>${t}</h3><p class="summary">${l.summary}</p><h4>📌 Rumus Penting</h4><div class="formula-list">${l.formulas.map(f=>`<div class="formula">${f}</div>`).join("")}</div><h4>🧩 Contoh</h4><div class="example">${l.example}</div><h4>🧠 Catatan Belajar</h4><ul>${l.notes.map(n=>`<li>${n}</li>`).join("")}</ul>`;}
function openStudy(){ $("studyGrade").value=$("gradeSelect").value;populateTopics();showScreen("studyScreen");}
function practiceTopic(){const g=Number($("studyGrade").value),topic=$("topicSelect").value;state.grade=g;state.mode="latihan";const pool=questionBank[g].filter(q=>q.topic===topic);state.questions=shuffle(pool.length?pool:questionBank[g]).slice(0,Math.min(5,pool.length||questionBank[g].length));state.index=0;state.score=0;state.xp=0;state.correct=0;state.streak=0;state.hints=2;state.hintsUsed=0;$("score").textContent=0;$("streak").textContent="0🔥";showScreen("gameScreen");renderQuestion();}
$("startBtn").onclick=startGame;$("nextBtn").onclick=nextQuestion;$("hintBtn").onclick=useHint;$("retryBtn").onclick=startGame;$("menuBtn").onclick=()=>showScreen("menuScreen");$("studyBtn").onclick=openStudy;$("studyBackBtn").onclick=()=>showScreen("menuScreen");$("resultStudyBtn").onclick=openStudy;$("studyGrade").onchange=populateTopics;$("topicSelect").onchange=renderLesson;$("practiceTopicBtn").onclick=practiceTopic;
if(!localStorage.getItem("mathquest_nama")){const nama=prompt("Masukkan nama pemain (opsional):");if(nama&&nama.trim())localStorage.setItem("mathquest_nama",nama.trim());}
