<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=iso-8859-9" />
	<title></title>
</head>
<body>
	<?php
		$baglanti=mysql_connect("localhost","root","") or die("Mysql'e bağlantı kurulamadı!") ;
		mysql_select_db("deneme",$baglanti) or die("Veritabanına bağlantı kurulamadı!");
		mysql_query("Set names 'latin5'");
		mysql_query("set character set latin5");
		mysql_query("set collation_connection= 'latin5_turkish_ci'");
		if($_POST){
			if ($_FILES["resim"]["size"]<1024*1024){
				if ($_FILES["resim"]["type"]=="image/jpeg"){
					$aciklama=$_POST["aciklama"];
					$dosya_adi=$_FILES["resim"]["name"];
					$uret=array("as","rt","ty","yu","fg");
					$uzanti=substr($dosya_adi,-4,4);
					$sayi_tut=rand(1,10000);
					$yeni_ad="dosyalar/".$uret[rand(0,4)].$sayi_tut.$uzanti;
					if (move_uploaded_file($_FILES["resim"]["tmp_name"],$yeni_ad)){
						echo 'Dosya başarıyla yüklendi.';
						$sorgu=mysql_query("insert into resimler (resim,aciklama) values ('$yeni_ad','$aciklama')");
						if ($sorgu){
							echo 'Veritabanına kaydedildi.';
						}else{
							echo 'Kayıt sırasında hata oluştu!';
						}
					}else{
						echo 'Dosya Yüklenemedi!';
					}
				}else{
					echo 'Dosya yalnızca jpeg formatında olabilir!';
				}
			}else{			
				echo 'Dosya boyutu 1 Mb ı geçemez!';
			}
		}
	?>
	<form action="" method="post" name="form1" enctype="multipart/form-data">
		<input type="file" name="resim"/><br/>
		<input type="text" name="aciklama"/><br/>
		<input type="submit" name="gonder" value="Kaydet"/>
	</form>
	<?php
		$sorgu2=mysql_query("select * from resimler");
		if (mysql_num_rows($sorgu2)){
			echo '<table>';
			while($kayit=mysql_fetch_array($sorgu2)){
				echo '<tr>';
				echo '<td><img src="'.$kayit["resim"].'" width="75" height="75"/></td>';
				echo '<td>'.$kayit["aciklama"].'</td>';
				echo '</tr>';
			}
			echo '</table>';
		}
	?>
</body>
</html>