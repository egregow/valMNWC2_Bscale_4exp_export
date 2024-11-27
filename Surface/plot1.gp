set terminal png
set output "fc_00000000_00000000_WestNorway_ALL_VI_0_thresholds.1.png"
set datafile missing "-99"
set title "Frequency  for Visibility (m)\n   Selection: WestNorway      9 stations\n  Period: 20240601-20240630\n  Used {00,03,...,21} + 00 01 ... 12" 

set style line 1 lt 0 lw 1 pt 5 # use black thin lines
set style line 2 lt 8 lw 1 pt 1 # use black thicker lines
set grid
set xlabel "thresholds m"
set ylabel "Frequency"
set logscale x
 
 set arrow  1 from  200.000000,graph 0.05 to  200.000000,graph 0.01 lt -1 lw 2 
 set arrow  2 from  500.000000,graph 0.05 to  500.000000,graph 0.01 lt -1 lw 2 
 set arrow  3 from  1000.00000,graph 0.05 to  1000.00000,graph 0.01 lt -1 lw 2 
 set arrow  4 from  3000.00000,graph 0.05 to  3000.00000,graph 0.01 lt -1 lw 2 
 set arrow  5 from  5000.00000,graph 0.05 to  5000.00000,graph 0.01 lt -1 lw 2 
 set arrow  6 from  10000.0000,graph 0.05 to  10000.0000,graph 0.01 lt -1 lw 2 
 set arrow  7 from  20000.0000,graph 0.05 to  20000.0000,graph 0.01 lt -1 lw 2 
 set arrow  8 from  40000.0000,graph 0.05 to  40000.0000,graph 0.01 lt -1 lw 2
 plot 'c_00000000_00000000_WestNorway_ALL_VI_0_MNWC2-ref.scores2' using 2:13 title 'OBS' with linespoints lt -1 lw 2 pt 7,'c_00000000_00000000_WestNorway_ALL_VI_0_MNWC2-ref.scores2' using 2:14 title 'MNWC2-ref' with linespoints lt 1 lw 2 pt 7,'c_00000000_00000000_WestNorway_ALL_VI_0_MNWC2-Bscale.scores2' using 2:14 title 'MNWC2-Bscale' with linespoints lt 4 lw 2 pt 7,'c_00000000_00000000_WestNorway_ALL_VI_0_MNWC2-Bs-mix1.scores2' using 2:14 title 'MNWC2-Bs-mix1' with linespoints lt 2 lw 2 pt 7,'c_00000000_00000000_WestNorway_ALL_VI_0_MNWC-Bs-mix2.scores2' using 2:14 title 'MNWC-Bs-mix2' with linespoints lt 3 lw 2 pt 7