// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require angular
//= require jquery
//= require jquery_ujs

//= require angular-rails-templates
//= require bootstrap.min
//= require angular-ui-router
//= require angular-resource
//= require angular-ui-bootstrap

//= require angular-resource

//= require angular-material
//= require angular-animate
//= require angular-aria


//= require angular-pdf
//= require angular-pdf.min

//= require custom
//= require Request
//= require_tree .

$('a[data-popup]').on('click', function(e) { window.open($(this).attr('href')); e.preventDefault(); });