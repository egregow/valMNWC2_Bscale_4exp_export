

title = 'Surface scatterplots'

framec='lightcoral'

v[0] = ['s']
t[0] = ['Full scatter']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','METCOOP','Norway','Sweden','Finland','Estonia','Denmark','METCOOPCity','METCOOPCoast','NorwayCoast','SwedenCoast','FinlandCoast','EstoniaCoast','METCOOPMountain','NorwayMountain','NorthNorway','WestNorway','EastNorway','Gotaland','Svealand','Norrland','FinlandLand','FinlandSouth','FinlandNorth','FinlandInlandWind','NorwayInlandWind','SwedenOpenLandWind','SwedenForest'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','DD','TT','TTHA','TN','TX','TD','TDD','RH','QQ','NN','N75','PE1','PE3','PE6','PE12','VI','CH','LC']
t[4] = ['Mslp','U10m','Max Wind Gust','Wind direction','T2m','T2m, height adjusted','Min T2m','Max T2m','Td2m','Td2m deficit','Rh2m','Q2m','Cloud cover','clouds <7500m','1h Precipitation','3h Precipitation','6h Precipitation','12h Precipitation','Visibility','Cloud base','Low clouds']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['MNWC2-ref','MNWC2-Bscale','MNWC2-Bs-mix1','MNWC-Bs-mix2']
t[6] = ['MNWC2-ref','MNWC2-Bscale','MNWC2-Bs-mix1','MNWC-Bs-mix2']
v[7] = ['ALL'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','t','t','t','l','l','t']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison between: \
      <br> MNWC2-ref      : MNWC preop reference run \
      <br> MNWC2-Bscale   : Sharper bg error covariances \
      <br> MNWC2-Bs-mix1  : Bscale + mix Q + Ps \
      <br> MNWC2-Bs-mix2  : Bscale + full mix vertically'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
