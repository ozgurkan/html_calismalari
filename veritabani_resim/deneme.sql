-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Anamakine: localhost
-- Üretim Zamanı: 17 Mayıs 2012 saat 17:32:49
-- Sunucu sürümü: 5.1.53
-- PHP Sürümü: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Veritabanı: `deneme`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `resimler`
--

CREATE TABLE IF NOT EXISTS `resimler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resim` varchar(256) NOT NULL,
  `aciklama` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin5 AUTO_INCREMENT=6 ;

--
-- Tablo döküm verisi `resimler`
--

INSERT INTO `resimler` (`id`, `resim`, `aciklama`) VALUES
(2, 'dosyalar/ty4848.jpg', 'Türk Bayrağı'),
(3, 'dosyalar/rt3449.jpg', 'Krizantem çiçeği'),
(4, 'dosyalar/as4910.jpg', 'Krizantem çiçeği'),
(5, 'dosyalar/rt2212.jpg', 'Çöl Burası');
