---
lang: "ru-RU"
---
# Linux

Версия дистрибутива Linux

```bash
lsb_release -a
# или
uname -a
```

Преобразование Unix-Timestamp в дату

```bash
cat out.txt | gawk '{print strftime("%c", $1)}'
```

Diff recursive

```bash
diff -aurbd <dir1> <dir2>
```

Выполнение скрипта `.onenter` при переходе в другую дирректорию (cd).
Добавить в `~/.bashrc`

```bash
cd () {
   builtin cd "$@"
   RESULT=$?
   [ -f "$PWD/.onenter" ] && source .onenter
   return $RESULT
}
```

Указание пути для библиотек

```bash
LD_LIBRARY_PATH=<path> my_prog args
```

Двоичный файл в массив C/С++

```bash
hexdump -ve '1/1 "0x%02x, "' file.bin
```

Регулярные выражения Perl для коммандной строки

```bash
grep -rn "todo:" * | perl -n -e '/todo:\s(.+)/ && print "$1\n"'
```

Преобразование Tikz в PNG

```bash
pdflatex img.tex
pdftops -eps img.pdf
convert -density 300 img.eps img.png
```

Создание ZIP архива

```bash
zip -r file.zip folder/
```

Печать подстроки из файла по регулярному выражению

```bash
cat file | awk 'match($0,/".+"/) {print substr($0,RSTART,RLENGTH)}'
```

Суффиксы и префиксы переменных (удобно для разделения имени файла и расширения)

```bash
${f%.*}                                     # обрезка суффикса
for i in *.tex ; do echo ${i%.*} ; done     # выведет только имена всех файлов *.tex
${f#.*}                                     # обрезка префикса
```

Монтирование файловой системы по SSL

```bash
sudo sshfs -o allow_other username@hostname.ru:/home/usernamedir /home/usermountdir
```

Чтение некоторых файлов через `less` и `lesspipe` - конфигурационный файл `~/.lessfilter`, пример:

```bash
#!/bin/sh
case "$1" in
        *.bin)
                ~/workspace-cpp/ReadStructs/Debug/ReadStructs "$1"
                ;;
        *.zip)
                zipinfo -1 "$1"
                ;;
        *)
                exit 1
esac
exit 0
```

Перекодирование файлов из `latin-1` в `utf-8`:

```bash
for i in `ls *.tex`; do iconv -f latin1 -t utf8 $i > tmp; mv tmp $i;  done
```

Поиск файлов, начиная с текущей папки:

```bash
find . -name "<name>"
```

Поиск файлов, начиная с текущей папки, по заданным имени/маске и содержимому:

```bash
find . -name "<имя/маска>"|while read i;do cat "$i"|grep -H --label="$i" -n "<текст для поиска>";done
```

Определение суммарного объема текущей папки:

```bash
du -sh .              #размер будет выведен в кБ, МБ или ГБ
du -sk .              #размер бутет выведен в кБ
```

Создание символической ссылки на файл/директорию:

```bash
ln -s <source> <link_name>
```

Замена текста в именах файлов:

```bash
for i in GEDIR* ; do j=`echo $i | sed 's/GEDIR/GPSR/g'` && mv $i $j; done
```

Подсчет количества строк в файле:

```bash
wc -l <file_name>
```