#lang racket


;;close function that uses .001 as the margin
(define (close a b)
(cond
    [(< (- a b) .001) #t]
    [(< (+ a b) .001) #t]
    [(= (- a b) .001) #t]
    [(> (- a b) .001) #f]))

;;close function that passes in a 'c' value
(define (close2 a b c)
(<(abs(- a b)) c))

(close2 3 5 4)
(close2 3 4 1)
