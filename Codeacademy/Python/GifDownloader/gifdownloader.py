import os
import tkinter as tk
from tkinter import filedialog
from tkinter import ttk
from tkinter import messagebox  # Importa il modulo messagebox

import requests

def download_meme():
    api_key = api_key_entry.get()
    query = query_entry.get()

    # Gestione degli errori per offset e numero di meme
    offset_value = offset_entry.get()
    num_memes_value = num_memes_entry.get()

    try:
        offset = int(offset_value) if offset_value else 0
    except ValueError:
        offset = 0

    try:
        num_memes = int(num_memes_value) if num_memes_value else 0
    except ValueError:
        num_memes = 0

    total_limit = offset + num_memes
    limit_per_request = 50

    destination_folder = filedialog.askdirectory()

    if destination_folder:
        for current_offset in range(offset, total_limit, limit_per_request):
            current_limit = min(limit_per_request, total_limit - current_offset)

            url = f'https://api.giphy.com/v1/gifs/search?q={query}&api_key={api_key}&limit={current_limit}&offset={current_offset}'

            response = requests.get(url)

            if response.status_code == 200:
                data = response.json()
                for i, gif in enumerate(data['data']):
                    gif_url = gif['images']['original']['url']
                    gif_response = requests.get(gif_url)
                    with open(os.path.join(destination_folder, f'meme_{current_offset + i}.gif'), 'wb') as f:
                        f.write(gif_response.content)
            else:
                print('Errore nella richiesta API')
                break

        # Mostra un messaggio di "Download completato"
        messagebox.showinfo("Download Completato", "Il download dei meme è stato completato!")

app = tk.Tk()
app.title("Scarica Meme")

# Frame principale
main_frame = ttk.Frame(app)
main_frame.pack(padx=20, pady=20)

# Etichetta e campo di input per l'API Key
api_key_label = ttk.Label(main_frame, text="API Key:")
api_key_label.grid(row=0, column=0, padx=5, pady=5)
api_key_entry = ttk.Entry(main_frame)
api_key_entry.grid(row=0, column=1, padx=5, pady=5)

# Etichetta e campo di input per l'offset
offset_label = ttk.Label(main_frame, text="Offset:")
offset_label.grid(row=1, column=0, padx=5, pady=5)
offset_entry = ttk.Entry(main_frame)
offset_entry.grid(row=1, column=1, padx=5, pady=5)

# Etichetta e campo di input per il numero di meme
num_memes_label = ttk.Label(main_frame, text="Numero di meme:")
num_memes_label.grid(row=2, column=0, padx=5, pady=5)
num_memes_entry = ttk.Entry(main_frame)
num_memes_entry.grid(row=2, column=1, padx=5, pady=5)

# Etichetta e campo di input per la query di ricerca
query_label = ttk.Label(main_frame, text="Query di ricerca:")
query_label.grid(row=3, column=0, padx=5, pady=5)
query_entry = ttk.Entry(main_frame)
query_entry.grid(row=3, column=1, padx=5, pady=5)

# Pulsante per selezionare la cartella di destinazione
def choose_destination_folder():
    folder = filedialog.askdirectory()
    if folder:
        destination_label.config(text=folder)

destination_frame = ttk.Frame(main_frame)
destination_frame.grid(row=4, column=0, columnspan=2, padx=5, pady=5)
destination_button = ttk.Button(destination_frame, text="Scegli cartella destinazione", command=choose_destination_folder)
destination_button.pack(side="left")
destination_label = ttk.Label(destination_frame, text="Cartella di destinazione:")
destination_label.pack(side="right")

# Pulsante per avviare il download
download_button = ttk.Button(main_frame, text="Scarica", command=download_meme)
download_button.grid(row=5, column=0, columnspan=2, padx=5, pady=5)

app.mainloop()
