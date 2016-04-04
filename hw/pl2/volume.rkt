#lang racket

;;define pi
(define pi (* 4 (atan 1.0)))

;;sphere-vol
(define (spherevol r)
    (/(* 4 pi (expt r 3)) 3))

;;shell-vol
(define (shellvol bigR littleR)
(- (spherevol bigR)(spherevol littleR)))

;;test
(shellvol 7 3)
(shellvol 5 2)
