<?php
header('Content-disposition: attachment; filename=randydesignresumefinal.compressed');
header('Content-type: 	application/pdf');
readfile('randydesignpdf-compressor-min.pdf');
?>