const Nilaikeaktifan = 100,
      NilaiUjian = 70,
      Absensi = 90;
      
if ((Nilaikeaktifan + NilaiUjian + Absensi)/3 == 100) {
    console.log('Outstanding')
} else if ((Nilaikeaktifan + NilaiUjian + Absensi)/3 >= 90) {
    console.log('Excellent')
} else if ((Nilaikeaktifan + NilaiUjian + Absensi)/3 >= 80) {
    console.log('Good')
} else {
    console.log('Participant')
}