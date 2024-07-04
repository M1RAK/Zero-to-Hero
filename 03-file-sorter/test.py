from os import listdir, path, makedirs
from shutil import move
from time import sleep

categories = {
    'Images': ['.jpg', '.jpeg', '.png', '.gif','.webp','.avif'],
    'Documents': ['.pdf', '.docx', '.txt','.pptx','.doc'],
    'Music': ['.mp3', '.wav', '.msv', '.wma'],
    'Videos': ['.wmv', '.mov', '.mp4','.mpg', '.mpe', '.mkv'],
    'Zip':['.iso','.tar','.gz','.rz','.7z', '.dmg','.rar','.zip'],
    'PDF': ['.pdf','.epub'],
    'Programs': ['.deb']
}

downloads_path = '/home/ara/Downloads'

def sort_files(downloads_path, categories):
    # Loop through the files in the downloads folder
    for file_name in listdir(downloads_path):
    # Create individual filepaths as strings
        file_path = path.join(downloads_path, file_name)
         # Confirm if path exists
        if path.isfile(file_path):
            # Grab the extension on the file
            file_extension = path.splitext(file_name)[1]
             # Loop through the extensions in the categories dict
            for category, extensions in categories.items():
                 # if file extension exists in categories dict, move_file()
                if file_extension in extensions:
                    move_file(file_path, path.join(downloads_path, category))
                    break

def move_file(file_path, destination_dir):
    if not path.exists(destination_dir):
        makedirs(destination_dir)
    move(file_path, destination_dir)    
        

def run_sorter_periodically(downloads_path, categories, interval=600):
    while True:
        sort_files(downloads_path, categories)
        sleep(interval)
          
