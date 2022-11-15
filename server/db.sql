--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5 (Homebrew)

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
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    subject_line character varying(255),
    message text,
    email character varying(255),
    date_sent date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.messages_id_seq OWNER TO postgres;

--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255),
    author character varying(255),
    image_link text,
    content text,
    date_added date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.news OWNER TO postgres;

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


ALTER TABLE public.news_id_seq OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (1, 'Sam Smith Set To Drop New Album', 'Hoppy Hopper', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');
INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (2, 'Rihanna Drops New Single, Finally!', 'Enzo Benzo', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');
INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (3, 'CONFIRMED: Jusitn Beiber Will Be Perfoming at Takeoff Memorial Service', 'Tooti Frooti', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.messages_id_seq', 1, false);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 3, true);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

