/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 
 var app = {
 // Application Constructor
 initialize: function() {
 document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
 },
 
 // deviceready Event Handler
 //
 // Bind any cordova events here. Common events are:
 // 'pause', 'resume', etc.
 onDeviceReady: function() {
 this.receivedEvent('deviceready');
 },
 
 // Update DOM on a Received Event
 receivedEvent: function(id) {
 var parentElement = document.getElementById(id);
 var listeningElement = parentElement.querySelector('.listening');
 var receivedElement = parentElement.querySelector('.received');
 
 listeningElement.setAttribute('style', 'display:none;');
 receivedElement.setAttribute('style', 'display:block;');
 
 console.log('Received Event: ' + id);
 }
 };
 
 app.initialize();*/
$(function () {
    /* INIZIO CULTURA*/
    $("#cultura").on("pagecreate", function () {

        $.ajax("https://briefapp-2b43c.firebaseio.com/cultura.json")
                .done(function (data) {
                    var lista = $("#cultura-content");
                    lista.empty();
                    
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<a href=#'+idPagina+'>';
                        htmlStruttura += '<div class="letorri" id="col-page" class="col-xs-12 col-md-6" style="background-image: url(' + riga.img + ')">';
                        htmlStruttura += '<div class="letorri-box"><p>'+riga.categoria+'</p></div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<h3>' + riga.nome + '</h3>';
                         htmlStruttura += '<hr></hr>';
                         htmlStruttura += '</a>';
//                        htmlStruttura += '<p>' + riga.descrizione + '</p>';
//                        htmlStruttura += '<p><a class="btn btn-primary btn-lg" href="#" role="button">Salva</a></p>';
                        $(lista).append(htmlStruttura);
                        
                        var htmlPagina = '<div data-role="page" id="'+ idPagina +'" class="page">';
                            htmlPagina += '<div data-role="header" id="header" data-tap-toggle="false">';
                            htmlPagina += '<a data-rel="back" class="ui-btn ui-btn-icon-right ui-icon-back" style="height:30px;"></a>';
                            htmlPagina += '<h1 style="text-transform:uppercase;">' + riga.nome + '</h1>';
                            htmlPagina += '</div>';
                            htmlPagina += '<div data-role="main" class="ui-content">';
                            htmlPagina += '<img src="'+riga.img+'">';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<p style="margin:10px 10px 10px;">' + riga.descrizione + '</p>';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<div class="box-social">';
                            htmlPagina += '<ul>';
                            htmlPagina += '<li class="social"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:50px;color:#3b5999;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#dd4b39;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#55acee;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-linkedin-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#0077B5;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '</ul>';
                            htmlPagina += '</div>';
                            htmlPagina += '</div>';
                            $("body").append(htmlPagina);
                    });
                })
                .fail(function () {
                        alert("Errore");
                });
    });
    /* FINE CULTURA*/
    /* INIZIO NATURA*/
    $("#natura").on("pagecreate", function () {

        $.ajax("https://briefapp-2b43c.firebaseio.com/natura.json")
                .done(function (data) {
                    var lista = $("#natura-content");
                    lista.empty();
                    
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<a href=#'+idPagina+'>';
                        htmlStruttura += '<div class="letorri" id="col-page" class="col-xs-12 col-md-6" style="background-image: url(' + riga.img + ')">';
                        htmlStruttura += '<div class="letorri-box2"><p>'+riga.categoria+'</p></div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<h3>' + riga.nome + '</h3>';
                         htmlStruttura += '<hr></hr>';
                         htmlStruttura += '</a>';
//                        htmlStruttura += '<p>' + riga.descrizione + '</p>';
//                        htmlStruttura += '<p><a class="btn btn-primary btn-lg" href="#" role="button">Salva</a></p>';
                        $(lista).append(htmlStruttura);
                        
                        var htmlPagina = '<div data-role="page" id="'+ idPagina +'" class="page">';
                            htmlPagina += '<div data-role="header" id="header" data-tap-toggle="false">';
                            htmlPagina += '<a data-rel="back" class="ui-btn ui-btn-icon-right ui-icon-back" style="height:30px;"></a>';
                            htmlPagina += '<h1 style="text-transform:uppercase;">' + riga.nome + '</h1>';
                            htmlPagina += '</div>';
                            htmlPagina += '<div data-role="main" class="ui-content">';
                            htmlPagina += '<img src="'+riga.img+'">';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<p style="margin:10px 10px 10px;">' + riga.descrizione + '</p>';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<div class="box-social">';
                            htmlPagina += '<ul>';
                            htmlPagina += '<li class="social"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:50px;color:#3b5999;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#dd4b39;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#55acee;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-linkedin-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#0077B5;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '</ul>';
                            htmlPagina += '</div>';
                            htmlPagina += '</div>';
                            $("body").append(htmlPagina);
                    });
                })
                .fail(function () {
                        alert("Errore");
                });
    });
    /* FINE NATURA*/
    /* INIZIO RISTORO*/
    $("#ristoro").on("pagecreate", function () {

        $.ajax("https://briefapp-2b43c.firebaseio.com/ristoro.json")
                .done(function (data) {
                    var lista = $("#ristoro-content");
                    lista.empty();
                    
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<a href=#'+idPagina+'>';
                        htmlStruttura += '<div class="letorri" id="col-page" class="col-xs-12 col-md-6" style="background-image: url(' + riga.img + ')">';
                        htmlStruttura += '<div class="letorri-box3"><p>'+riga.categoria+'</p></div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<h3>' + riga.nome + '</h3>';
                         htmlStruttura += '<hr></hr>';
                         htmlStruttura += '</a>';
//                        htmlStruttura += '<p>' + riga.descrizione + '</p>';
//                        htmlStruttura += '<p><a class="btn btn-primary btn-lg" href="#" role="button">Salva</a></p>';
                        $(lista).append(htmlStruttura);
                        
                        var htmlPagina = '<div data-role="page" id="'+ idPagina +'" class="page">';
                            htmlPagina += '<div data-role="header" id="header" data-tap-toggle="false">';
                            htmlPagina += '<a data-rel="back" class="ui-btn ui-btn-icon-right ui-icon-back" style="height:30px;"></a>';
                            htmlPagina += '<h1 style="text-transform:uppercase;">' + riga.nome + '</h1>';
                            htmlPagina += '</div>';
                            htmlPagina += '<div data-role="main" class="ui-content">';
                            htmlPagina += '<img src="'+riga.img+'">';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<p style="margin:10px 10px 10px;">' + riga.descrizione + '</p>';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<div class="box-social">';
                            htmlPagina += '<ul>';
                            htmlPagina += '<li class="social"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:50px;color:#3b5999;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#dd4b39;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#55acee;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-linkedin-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#0077B5;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '</ul>';
                            htmlPagina += '</div>';
                            htmlPagina += '</div>';
                            $("body").append(htmlPagina);
                    });
                })
                .fail(function () {
                        alert("Errore");
                });
    });
    /* FINE RISTORO*/
    /* INIZIO ALLOGGI*/
    $("#alloggi").on("pagecreate", function () {

        $.ajax("https://briefapp-2b43c.firebaseio.com/alloggi.json")
                .done(function (data) {
                    var lista = $("#alloggi-content");
                    lista.empty();
                    
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<a href=#'+idPagina+'>';
                        htmlStruttura += '<div class="letorri" id="col-page" class="col-xs-12 col-md-6" style="background-image: url(' + riga.img + ')">';
                        htmlStruttura += '<div class="letorri-box4"><p>'+riga.categoria+'</p></div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<h3>' + riga.nome + '</h3>';
                         htmlStruttura += '<hr></hr>';
                         htmlStruttura += '</a>';
//                        htmlStruttura += '<p>' + riga.descrizione + '</p>';
//                        htmlStruttura += '<p><a class="btn btn-primary btn-lg" href="#" role="button">Salva</a></p>';
                        $(lista).append(htmlStruttura);
                        
                        var htmlPagina = '<div data-role="page" id="'+ idPagina +'" class="page">';
                            htmlPagina += '<div data-role="header" id="header" data-tap-toggle="false">';
                            htmlPagina += '<a data-rel="back" class="ui-btn ui-btn-icon-right ui-icon-back" style="height:30px;"></a>';
                            htmlPagina += '<h1 style="text-transform:uppercase;">' + riga.nome + '</h1>';
                            htmlPagina += '</div>';
                            htmlPagina += '<div data-role="main" class="ui-content">';
                            htmlPagina += '<img src="'+riga.img+'">';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<p style="margin:10px 10px 10px;">' + riga.descrizione + '</p>';
                            htmlPagina += '<hr></hr>';
                            htmlPagina += '<div class="box-social">';
                            htmlPagina += '<ul>';
                            htmlPagina += '<li class="social"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:50px;color:#3b5999;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#dd4b39;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#55acee;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '<li class="social"><i class="fa fa-linkedin-square" aria-hidden="true" style="font-size:50px;margin-left:20px;color:#0077B5;"></i>';
                            htmlPagina += '</li>';
                            htmlPagina += '</ul>';
                            htmlPagina += '</div>';
                            htmlPagina += '</div>';
                            $("body").append(htmlPagina);
                    });
                })
                .fail(function () {
                        alert("Errore");
                });
    });
    /* FINE RISTORO*/
});