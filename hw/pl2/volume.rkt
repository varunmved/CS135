#lang racket
;;volume of a sphere

;;define pi
(define pi (* 4 (atan 1.0)))

;;circumference
(define (circ r) (* * 2 pi r))

;;big R
(define (rcalc r1 r2)
    (* (* pi (r2 + r1)) (r2 - r1)))

;;sphere-vol
(define (spherevol r)
    (/(* 4 pi (expt r 3)) 3))

;;shell-vol
;;2pir * h * (r2-r1)
(define (shellvol h r1 r2)
    (* h rcalc r1 r2))

;;test
(spherevol 3)
(shellvol 3 1 5)

