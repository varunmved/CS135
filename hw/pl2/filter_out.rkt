#lang racket

(define (filter-out-symbol lis symbol)
 (cond ((null? lis) '())
 ((eq? symbol (car lis))
 (filter-out-symbol (cdr lis) symbol))
 (else (cons (car lis)
 (filter-out-symbol (cdr lis) symbol)))))

(filter-out-symbol '(Joey only likes dank memes)'dank)
(filter-out-symbol '(Pepe is our lord Pepe is our savior)' Pepe)


