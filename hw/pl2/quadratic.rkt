#lang racket

(define (fourac a c)(* 4 a c))

(define (bsqr b)(expt b b))

;how many
(define (how-many a b c)
(cond
    [(> (expt b b) (fourac a c)) 2]
    [(= (expt b b) (fourac a c)) 1]
    [(< (expt b b) (fourac a c)) 0]))

(how-many 1 0 -1)

