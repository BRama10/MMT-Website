#pip install supabase

import json, os
from supabase import create_client, Client

from pprint import pprint as print
from tqdm import tqdm

url: str = 'https://dpnbsfpdcshneekqivnw.supabase.co'
key: str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbmJzZnBkY3NobmVla3Fpdm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTkxMzAsImV4cCI6MjAyOTM5NTEzMH0.5Tv6mLcgL0Roe4F2LxRsTURCQ11-GmJ-qZKMvywimyM'
supabase: Client = create_client(url, key)

with open(os.getcwd()+'/src/lib/jsons/Members.json', 'r') as file:
    data = json.load(file)

with open(os.getcwd()+'/src/lib/jsons/Titles.json', 'r') as file:
    title_keys = {item.pop('priority'): item for item in json.load(file)}

def process_entry(entry: dict[str, str | int]):
    filtered = {}

    filtered['email'] = entry['email']
    filtered['name'] = entry['displayname']
    filtered['bio'] = entry['bio']
    filtered['discord_data'] = {
        'username': entry['discordusername'],
        'id': entry.get('discordid'),
        'roles': [k.strip() for k in entry['discordroles'].split(';') if k.strip() != '']
    }
    filtered['pic_urls'] = [
        entry.get('pic1path'),
        entry.get('pic2path')
    ]

    roles = set()

    filtered['sections'] = []
    filtered['roles'] = []


    for r in ["org", "pw", "t", "d", "td", "cd", "ce", "vp"]:
        if entry.get(r):
            filtered['sections'].append(r)
            filtered['roles'].append(
                title_keys.get(entry.get(r+'priority')).get(r),
            )

    return filtered

def insert_row(row: dict, client: Client):
    data, count = client.table('members') \
        .insert(row) \
        .execute()
    
    return data, count

if __name__ == '__main__':
    count = 0

    print(title_keys)

    for d in tqdm(data):
        try:
            row = process_entry(d)
            res = insert_row(row, supabase)
        except Exception as e:
            print(f'Error @ {count}')
            print(e)
        count += 1

    print(f'DONE =>> {count}')

