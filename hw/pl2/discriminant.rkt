#lang racket

(define (fourac a c)(* 4 a c))

(define (bsqr b)(expt b b))

;how many
(define (how-many a b c)
(cond
    [(> (* b b) (fourac a c)) 2]
    [(= (* b b) (fourac a c)) 1]
    [(< (* b b) (fourac a c)) 0]))

(how-many 1 0 -1)
(how-many 2 4 2)

