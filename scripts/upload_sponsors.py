#pip install supabase

import json, os
from supabase import create_client, Client

from pprint import pprint as print
from tqdm import tqdm

from copy import deepcopy

url: str = 'https://dpnbsfpdcshneekqivnw.supabase.co'
key: str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbmJzZnBkY3NobmVla3Fpdm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTkxMzAsImV4cCI6MjAyOTM5NTEzMH0.5Tv6mLcgL0Roe4F2LxRsTURCQ11-GmJ-qZKMvywimyM'
supabase: Client = create_client(url, key)

with open(os.getcwd()+'/src/lib/jsons/sponsorTiers.json', 'r') as file:
    sponsors = json.load(file)

def insert_row(row: dict, client: Client):
    data, count = client.table('sponsors') \
        .insert(row) \
        .execute()
    
    return data, count

def process_entry(entry: dict[str, list[dict]], index: int):
    template = {}

    template['tier_name'] = entry.get('name')
    template['tier_level'] = index
    template['tier_color'] = entry.get('headerColor')

    for e in entry.get('sponsors'):
        i = deepcopy(template)

        i['img_url'] = e.get('url')
        i['alt_text'] = e.get('alt')
        i['link'] = e.get('link')

        insert_row(i, supabase)

    
if __name__ == '__main__':
    count = 0

    for index, d in tqdm(enumerate(sponsors)):
        try:
            row = process_entry(d, index)
        except Exception as e:
            print(f'Error @ {count}')
            print(e)
        count += 1

    print(f'DONE =>> {count}')
    

        