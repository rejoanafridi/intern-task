import requests
import json

data = requests.get("https://gorest.co.in/public/v1/users")
res = data.json()
print(res)

# api response data comment here
# {'meta': {'pagination': {'total': 3387, 'pages': 170, 'page': 1, 'limit': 20, 'links': {'previous': None, 'current': 'https://gorest.co.in/public/v1/users?page=1', 'next': 'https://gorest.co.in/public/v1/users?page=2'}}}, 'data': [{'id': 3469, 'name': 'Bahula Pothuvaal DDS', 'email': 'bahula_pothuvaal_dds@leuschke.name', 'gender': 'female', 'status': 'active'}, {'id': 3465, 'name': 'Mr. Gangesh Chaturvedi', 'email': 'mr_gangesh_chaturvedi@sauer-huels.biz', 'gender': 'female', 'status': 'active'}, {'id': 3463, 'name': 'Aashritha Sharma', 'email': 'sharma_aashritha@abernathy.com', 'gender': 'male', 'status': 'active'}, {'id': 3462, 'name': 'Abhirath Ahuja', 'email': 'ahuja_abhirath@renner.net', 'gender': 'female', 'status': 'active'}, {'id': 3461, 'name': 'Subhasini Bharadwaj', 'email': 'bharadwaj_subhasini@moore.io', 'gender': 'male', 'status': 'inactive'}, {'id': 3460, 'name': 'Dhanpati Iyengar', 'email': 'dhanpati_iyengar@beahan-stokes.io', 'gender': 'female', 'status': 'active'}, {'id': 3459, 'name': 'Balagopal Bhattathiri', 'email': 'balagopal_bhattathiri@erdman.net', 'gender': 'female', 'status': 'inactive'}, {'id': 3458, 'name': 'Akshainie Agarwal', 'email': 'akshainie_agarwal@bogan.com', 'gender': 'male', 'status': 'inactive'}, {'id': 3457, 'name': 'Bhoopati Jain', 'email': 'bhoopati_jain@wehner-hilll.com', 'gender': 'male', 'status': 'inactive'}, {'id': 3456, 'name': 'Pran Dubashi', 'email': 'dubashi_pran@daniel-beahan.info', 'gender': 'male', 'status': 'inactive'}, {'id': 3455, 'name': 'Dr. Himadri Pandey', 'email': 'dr_himadri_pandey@leffler-hintz.biz', 'gender': 'male', 'status': 'inactive'}, {'id': 3454, 'name': 'Bhagvan Adiga', 'email': 'bhagvan_adiga@fisher.biz', 'gender': 'female', 'status': 'inactive'}, {'id': 3453, 'name': 'Chandramauli Bharadwaj', 'email': 'bharadwaj_chandramauli@bednar-gislason.com', 'gender': 'female', 'status': 'active'}, {'id': 3452, 'name': 'Oormila Pothuvaal', 'email': 'oormila_pothuvaal@mann-herman.net', 'gender': 'female', 'status': 'active'}, {'id': 3450, 'name': 'Bhagvan Varma', 'email': 'bhagvan_varma@harris-langosh.name', 'gender': 'male', 'status': 'active'}, {'id': 3449, 'name': 'Miss Jagathi Banerjee', 'email': 'jagathi_banerjee_miss@lesch-kuvalis.biz', 'gender': 'female', 'status': 'inactive'}, {'id': 3448, 'name': 'Msgr. Inder Sharma', 'email': 'inder_sharma_msgr@schmitt-runte.org', 'gender': 'male', 'status': 'active'}, {'id': 3447, 'name': 'Krishnadasa Varrier', 'email': 'varrier_krishnadasa@goyette.org', 'gender': 'female', 'status': 'active'}, {'id': 3446, 'name': 'Sachin Saini', 'email': 'saini_sachin@rowe-keeling.com', 'gender': 'male', 'status': 'active'}, {'id': 3445, 'name': 'Manoj Khan', 'email': 'manoj_khan@blanda.biz', 'gender': 'male', 'status': 'active'}]}