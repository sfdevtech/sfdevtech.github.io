<?php
header('Content-disposition: attachment; randydesignpdf-compressor-min');
header('Content-type: 	application/pdf');
readfile('randydesignresumefinal.compressed.pdf');
?>