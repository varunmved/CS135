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
(cond
    [(< (- a b) c) #t]
    [(< (+ a b) c) #t]
    [(= (- a b) c) #t]
    [(> (- a b) c) #f]))


(close .499 .5)
(close2 .499 .5 .001)

