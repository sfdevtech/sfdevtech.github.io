<?php
header('Content-disposition: attachment; filename=designerresume.pdf');
header('Content-type: 	application/pdf');
readfile('designerresume.pdf');
?>