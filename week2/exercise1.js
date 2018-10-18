
1. 2ND LAW NEWTON---------------------------------------

INITIALIZE massa benda TO 600
INITIALIZE percepatan benda TO 2

COMPUTE massa benda MULTIPLY BY percepatan benda
SAVE PREVIOUS COMPUTATION AS resultan

2. LEAP YEAR----------------------------------------------

ALGORITHM:
STEP 1: get year number first
STEP 2: if year number divided by 4 equal to 0, then proceed to step 3
STEP 3: if year number divided by 100 is not equal to 0, then proceed to step 4
STEP 4: if year number divided by 400 equal to 0, then year number is leap year 

INITIALIZE year
IF COMPUTE year MOD 4 EQUAL TO 0
    AND year MOD 100 NOT EQUAL TO 0
    AND year MOD 400 EQUAL TO 0
    THEN PRINT "year is leap"

3. LAUNDRY DAY-------------------------------------------

ALGORITHM:
STEP 1: get cucian kotor quantity, and cucian di mesin quantity is must be zero
STEP 2: if cucian kotor quantity is zero, then nothing to do :), other than that then proceed to step 3
STEP 3: move cucian kotor quantity to cucian di mesin one-by-one until cucian kotor quantity reach zero, and then proceed to step 4
STEP 4: run mesin cuci

INITIALIZE cucian kotor TO 20
INITIALIZE cucian di mesin TO 0

WHILE 
    cucian kotor NOT EQUAL TO 0 AND 
    cucian di mesin NOT EQUAL TO 20
        THEN 
            DO ADD VALUE cucian di mesin BY 1 AND 
            DO SUBTRACT VALUE OF cucian kotor BY 1
        END WHEN
            VALUE OF cucian kotor EQUAL TO 0 AND
            VALUE OF cucian di mesin EQUAL TO 20
    
GENERATE mesin cuci

4. PERIKSA KUKU-----------------------------------------

ALGORITHM:
STEP 1: get numbers of siswa siswi, if numbers of siswa siswi is 0 then nothing to do, other than that proceed to step 2
STEP 2: get length of 'kuku' every siswa siswi, then proceed to step 3
STEP 3: check length of 'kuku' every siswa siswi respectively
STEp 4: if from step 3 returned value "panjang" then run 'hukuman', else if from step 3 return value "pendek" then run 'pujian'

INITIALIZE siswa siswi TO 40
WHILE siswa siswi VALUE IS LESS THAN OR EQUAL TO 40
    INPUT siswa siswi LENGTH OF kuku

    IF siswa siswi LENGTH OF kuku EQUAL TO "panjang"
        GENERATE hukum
    ELSE
        GENERATE puji

    COMPUTE siswa siswi SUBTRACT BY 1

