#!/bin/sh
find /home/liturgyl/mail/liturgylaboratory.com/hello/new -mtime +1 -type f -ls -delete
find /home/liturgyl/mail/liturgylaboratory.com/hello/cur -mtime +1 -type f -ls -delete
find /home/liturgyl/mail/liturgylaboratory.com/privacy/new -mtime +1 -type f -ls -delete
find /home/liturgyl/mail/liturgylaboratory.com/privacy/cur -mtime +1 -type f -ls -delete