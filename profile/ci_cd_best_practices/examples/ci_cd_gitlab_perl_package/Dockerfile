FROM ubuntu:20.04

# set author
MAINTAINER Firstname LastName <enter your email>

### 
### [CONTAINER CORE FUNCTIONS]: 
###   xxxx
###   xxxx
### [NOTES] 
###   xxxx

RUN apt-get -y update &&\
    apt-get -y install build-essential \
        cpanminus \
        git \
        gzip \
        libtext-csv-perl \
        libxml-twig-perl \
        libdevel-cover-perl \
        libjson-xs-perl \
        libfile-share-perl && \
        cpan install ExtUtils::MakeMaker && \
        cpan install File::ShareDir::Install && \
        cpan install Module::Release &&\
        cpan install Module::Release::Git  && \
        cpan install Module::CPANTS::Analyse  && \
        cpan install CPAN::Uploader && \
        cpan install App::CPANTS::Lint  && \
        cpan install JSON  && \
        cpan install HTML::Template && \
        cpan install Log::Any && \
        cpan install URI::Query && \
        cpan install Class::Data::Inheritable && \
        cpan install Class::Accessor && \
        cpan install DateTime && \
        cpan install Pod::Markdown && \
        apt-get autoremove -y && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

