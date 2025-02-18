
// Input file

title = 'Vertical profiles'
framec='Tomato'

v[0] = ['l']
t[0] = ['diff']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL'] ;
t[3] = v[3] ;
v[4] =['ALL','00','12'] ;
t[4] =v[4]
v[5] = ['TT','TD','FF','DD','FI','RH','QQ']
t[5] = ['Temperature','Dew point T','Wind speed','Wind direction','Geopotential','Relative humidity','Specific humidity']
v[6] =[0] ;
t[6] =[0] ;
v[7] =['ALL','00','12'] ;
t[7] = v[7] ;
mname = ['Type','Period','Station','Selection','Time (UTC)','Parameter','Dum','Initial time']
spec_name =[0,1,2,3,7,4,5,6]

loc = ['l','t','t','t','l','l','l','t']
do_debug = false ;

pdir ='Temp_prof/'
ext='1.png'
help = 'Observation verification comparison between: \
      <br> MNWC2-ref      : MNWC preop reference run \
      <br> MNWC2-Bscale   : Sharper bg error covariances \
      <br> MNWC2-Bs-mix1  : Bscale + mix Q + Ps \
      <br> MNWC2-Bs-mix2  : Bscale + full mix vertically'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con=['All','Temp/quality_[1].html','Temp/TABLE_LL_[1]_[3].html']
my_con_txt=['Graphics','Quality control','Stat']

