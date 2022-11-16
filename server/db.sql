--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS preshworthy;
--
-- Name: techtonica1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE preshworthy WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE preshworthy OWNER TO presh;

\connect preshworthy

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying (255),
    author character varying(255),
    image_link text,
    content text,
    date_added date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.news OWNER TO presh;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_id_seq OWNER TO presh;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;

--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    subject_line character varying (255),
    message text,
    email character varying(255),
    date_sent date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.messages OWNER TO presh;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres

CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.messages_id_seq OWNER TO presh;



ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

-- COPY public.news (id, title, author, image_link) FROM stdin;
-- 1	Gomez	Andrea  
-- 2	Lee	Becca
-- 3	Smith	Will
-- 4	Pond	Kate
-- 5	Lasso	Jamie
-- 7	Rodriguez	Arepa
-- 8	Smith	Crush
-- 9	Fonca	Billy
-- 10	Gomez	Teresa
-- 11	Tres	Prueba
-- 12	Cuatro	Prueba 
-- 13	Cinco	Prueba
-- \.


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 13, true);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


CREATE TABLE users (
    id integer NOT NULL,
    username varchar,
    YouTube_url text,
    Spotify_url text
);

CREATE TABLE playlists (
    id integer NOT NULL,
    title varchar,
    user text,
    users_id integer
);


INSERT INTO public.news (title, author, image_link, content) VALUES ('Sam Smith Set To Drop New Album', 'Hoppy Hopper', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.');
INSERT INTO public.news (title, author, image_link, content) VALUES ('Rihanna Drops New Single, Finally!', 'Enzo Benzo', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.');
INSERT INTO public.news (title, author, image_link, content) VALUES ('CONFIRMED: Jusitn Beiber Will Be Perfoming at Takeoff Memorial Service', 'Tooti Frooti', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.');
INSERT INTO public.news (title, author, image_link, content) VALUES ('TakeOff, of Migos, Reported Dead at 28', 'Tooti Frooti', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.');
INSERT INTO public.news (title, author, image_link, content) VALUES ('POLL: Let Us Know How You Feel About The New Album From Drake and 21 Savage', 'Hoppy Hopper', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.');





--
-- PostgreSQL database dump complete
--

