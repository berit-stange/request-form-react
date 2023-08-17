import React from 'react';
import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';
import logoW from './img/stange-design-logo-weiss.svg';


function Footer() {
    return (
        <div className="footer">



            <div class="pad-20ou clearfix">
                <div class="col-2-6 clearfix">
                    <div class="foo-log">

                        <Link to="/anfrage/">
                            <img src={logoW} className="foo-log" alt="logo" />
                        </Link>

                        <p class="p-foot pad-o clearfix">
                            Stange Design GmbH <br></br>
                            Am Lilograben 4<br></br>
                            14979 Großbeeren (GVZ)<br></br>
                            Tel +49 (0)33701 907530<br></br>
                            Fax +49 (0)33701 905320<br></br>
                            info@stange-design.de<br></br>
                        </p>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="col-1-6 clearfix">
                        <ul>
                            <li class="nav-footer">
                                <a href="/projekte.html" class="a-foot-spez bo-bot">PROJEKTE</a>
                                <ul class="clearfix">
                                    <li class="nav2-footer"><a href="/projekte/ausstellungen.html"
                                        class="te-w">Ausstellungen</a></li>
                                    <li class="nav2-footer"><a href="/projekte/messen.html" class="te-w">Messe</a></li>
                                    <li class="nav2-footer"><a href="/projekte/event.html" class="te-w">Event</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-1-6 clearfix">
                        <li class="nav-footer">
                            <a class="a-foot-spez bo-bot" href="/entwicklung.html">ENTWICKLUNG</a>
                            <ul class="clearfix">
                                <li class="nav2-footer"><a href="/entwicklung/aktion-mensch.html" class="te-w">Aktion
                                    Mensch</a>
                                </li>
                                <li class="nav2-footer"><a href="/entwicklung/bone-brox.html" class="te-w">Bone Brox</a>
                                </li>
                                <li class="nav2-footer"><a href="/entwicklung/boombox.html" class="te-w">Boombox</a></li>
                                <li class="nav2-footer"><a href="/entwicklung/pololo.html" class="te-w">Pololo</a></li>
                            </ul>
                        </li>
                    </div>
                    <div class="col-1-6 clearfix">
                        <li class="nav-footer">
                            <a class="a-foot-spez bo-bot" href="/produkte.html">PRODUKTE</a>
                            <ul class="clearfix">
                                <li class="nav2-footer"><a href="/produkte/bett.html" class="te-w">Bett</a></li>
                                <li class="nav2-footer"><a href="/produkte/garderobe.html" class="te-w">Garderobe</a></li>
                                <li class="nav2-footer"><a href="/produkte/hocker-maks.html" class="te-w">Hocker</a></li>
                                <li class="nav2-footer"><a href="/produkte/kommode.html" class="te-w">Kommode</a></li>
                                <li class="nav2-footer"><a href="/produkte/regal-element.html" class="te-w">Regal
                                    ELEMENT</a>
                                </li>
                                <li class="nav2-footer"><a href="/produkte/regale-a3.html" class="te-w">Regal-System A3</a>
                                </li>
                                <li class="nav2-footer"><a href="/produkte/schaf.html" class="te-w">Schaf</a></li>
                                <li class="nav2-footer"><a href="/produkte/sessel.html" class="te-w">Sessel</a></li>
                                <li class="nav2-footer"><a href="/produkte/tisch-tabula-rasa.html" class="te-w">Tisch</a>
                                </li>

                            </ul>
                        </li>
                    </div>
                    <div class="col-1-6 clearfix">
                        <li class="nav-footer">
                            <a class="a-foot-spez bo-bot" href="/about.html">ÜBER UNS</a>
                            <ul class="clearfix">
                                <li class="nav2-footer"><a href="/about/faq.html" class="te-w">FAQ</a></li>
                                <li class="nav2-footer"><a href="/about/philosophie.html" class="te-w">Philosophie</a></li>
                                <li class="nav2-footer"><a href="/about/ueber-uns.html" class="te-w">Geschichte</a></li>
                                <li class="nav2-footer"><a href="/about/ueber-wellpappe.html" class="te-w">Über Pappe</a>
                                </li>
                                <li class="nav2-footer"><a href="/about/veroeffentlichungen.html" class="te-w">Medien</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            <div class="foot-cent pad-l">
                <a class="a-foot-u" href="/impressum.html">Impressum</a>
                <a class="a-foot-u" href="/datenschutz.html">Datenschutz</a>

            </div>



        </div>
    );
}

export default Footer;