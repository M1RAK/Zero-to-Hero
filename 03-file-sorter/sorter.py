from os import listdir, path, makedirs
from shutil import move 

downloads_path = '/home/ara/Downloads/'
categories = {
    'Images': ['.jpg', '.jpeg', '.png', '.gif','.webp','.avif'],
    'Documents': ['.pdf', '.docx', '.txt','.pptx','.doc'],
    'Music': ['.mp3', '.wav', '.msv', '.wma'],
    'Videos': ['.wmv', '.mov', '.mp4','.mpg', '.mpe', '.mkv'],
    'Zip':['.iso','.tar','.gz','.rz','.7z', '.dmg','.rar','.zip'],
    'PDF': ['.pdf','.epub'],
    'Programs': ['.deb']
}
    

def sort_files(downloads_path, categories):
    for filename in listdir(downloads_path):
        file_path = path.join(downloads_path, filename)
        if path.isfile(file_path):
            file_extension = path.splitext(filename)[1]
            for category, extensions in categories.items():
                if file_extension in extensions:
                    move_file(file_path, path.join(downloads_path, category))
                    break

def move_file(file_path, destination_dir):
    if not path.exists(destination_dir):
        makedirs(destination_dir)
    move(file_path, destination_dir)    
      
# def run_sorter_periodically(downloads_path, categories, interval=600):
#         while True:
#             sort_files(downloads_path, categories)
#             time.sleep(interval) 
    
# TODO Create a function that overwrites same file based on the filesize !               

sort_files(downloads_path, categories)