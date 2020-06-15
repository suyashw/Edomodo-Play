import pandas as pd
import sqlite3


def start():
	file = '/home/suyash/Desktop/EdmodoR/db.sqlite3'
	cnx = sqlite3.connect(file)
	df = pd.read_sql_query("SELECT * FROM play_user", cnx)
	print(df)
	#c = cnx.cursor()
	#c.execute('SELECT * FROM play_user')
	#all_rows = c.fetchall()

