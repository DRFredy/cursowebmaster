use ejercicio;

-- 1) ¿Cuáles son los nombres y la ocupación de cada uno de los empleados? 
select nombre, trabajo 
from empleados;

-- 2) ¿Cuál es el nombre y la edad de cada uno de los empleados?
select nombre, edad 
from empleados;

-- 3) ¿Cuál es el nombre y la edad de todos los programadores?
select nombre, edad 
from empleados
where trabajo in ('Programador Senior', 'Programador');

-- 4) ¿Cuáles son los empleados de mas de 30 años?
select concat(nombre, ' ', apellido) nombre_apellido, edad  
from empleados
where edad > 30;

-- 5) ¿Cuál es el apellido y el mail de los empleados llamados Juan?
select apellido, mail  
from empleados
where upper(ltrim(rtrim(nombre))) = 'JUAN';

-- 6) ¿Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web?
select nombre 
from empleados
where trabajo in ('Programador', 'Desarrollador Web');

-- 7) Mostrar una lista (id_emp, nombre, apellido, trabajo) de las personas cuyo numero de empleado esté entre 15 y 20.
select id_emp, nombre, apellido , trabajo  
from empleados
where id_emp between 15 and 20;

-- 8) ¿Cuáles son los Programadores que ganan menos de $80000?
select concat(nombre, ' ', apellido) nombre_apellido, trabajo  
from empleados
where salario < 80000;

-- 9) ¿Cuáles son los Programadores que ganan entre $75000 y  $90000?
select concat(nombre, ' ', apellido) nombre_apellido  
from empleados
where trabajo = 'Programador'
 and salario between 75000 and 90000;

-- 10) ¿Cuáles son los trabajadores cuyo apellido comienza con S?
select concat(nombre, ' ', apellido) nombre_apellido  
from empleados
where upper(ltrim(rtrim(apellido))) like 'S%';

-- 11) ¿Cuáles son los trabajadores cuyo nombre termina en l?
select concat(nombre, ' ', apellido) nombre_apellido  
from empleados
where upper(ltrim(rtrim(nombre))) like '%L';

-- 12) Agregar un empleado con ID_empleado 22 con los siguientes datos: Francisco Perez,  Programador, 26 años, salario 90000, mail: francisco@bignet.com.
insert into empleados(id_emp, nombre, apellido, trabajo, edad, salario, mail)
values (22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com');

-- 13) Borrar los datos de Hernan Rosso.
delete from empleados 
where upper(ltrim(rtrim(nombre))) = 'HERNAN'
 and upper(ltrim(rtrim(apellido))) = 'ROSSO'

-- 14) Modificar el salario de Daniel Gutierrez a 90000.
update empleados 
set salario = 90000
where upper(ltrim(rtrim(nombre))) = 'DANIEL'
 and upper(ltrim(rtrim(apellido))) = 'GUTIERREZ';