--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

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
-- Name: appreciates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appreciates (
    id integer NOT NULL,
    uid text,
    pid text
);


ALTER TABLE public.appreciates OWNER TO postgres;

--
-- Name: appreciates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.appreciates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appreciates_id_seq OWNER TO postgres;

--
-- Name: appreciates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.appreciates_id_seq OWNED BY public.appreciates.id;


--
-- Name: cmts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cmts (
    id integer NOT NULL,
    uid text,
    pid text,
    content text,
    reply_to text,
    created_time timestamp without time zone
);


ALTER TABLE public.cmts OWNER TO postgres;

--
-- Name: cmts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cmts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cmts_id_seq OWNER TO postgres;

--
-- Name: cmts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cmts_id_seq OWNED BY public.cmts.id;


--
-- Name: competencies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.competencies (
    id integer NOT NULL,
    pid text,
    core text,
    sub text,
    profile text
);


ALTER TABLE public.competencies OWNER TO postgres;

--
-- Name: competencies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.competencies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.competencies_id_seq OWNER TO postgres;

--
-- Name: competencies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.competencies_id_seq OWNED BY public.competencies.id;


--
-- Name: downloads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.downloads (
    id integer NOT NULL,
    pid text,
    uid text
);


ALTER TABLE public.downloads OWNER TO postgres;

--
-- Name: downloads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.downloads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.downloads_id_seq OWNER TO postgres;

--
-- Name: downloads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.downloads_id_seq OWNED BY public.downloads.id;


--
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id integer NOT NULL,
    uid text,
    pid text,
    name text,
    file_link text
);


ALTER TABLE public.files OWNER TO postgres;

--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_id_seq OWNER TO postgres;

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: lesson_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_plans (
    id integer NOT NULL,
    uid text,
    img text,
    subject text,
    grade text,
    topic text,
    description text,
    instruction text,
    is_public boolean,
    is_draft boolean,
    created_time timestamp without time zone DEFAULT now(),
    learning_objs text,
    remarks text
);


ALTER TABLE public.lesson_plans OWNER TO postgres;

--
-- Name: lesson_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lesson_plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lesson_plans_id_seq OWNER TO postgres;

--
-- Name: lesson_plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lesson_plans_id_seq OWNED BY public.lesson_plans.id;


--
-- Name: links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.links (
    id integer NOT NULL,
    pid text,
    link text
);


ALTER TABLE public.links OWNER TO postgres;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO postgres;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: views; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.views (
    id integer NOT NULL,
    uid text,
    pid text,
    created_time timestamp without time zone
);


ALTER TABLE public.views OWNER TO postgres;

--
-- Name: views_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.views_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.views_id_seq OWNER TO postgres;

--
-- Name: views_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.views_id_seq OWNED BY public.views.id;


--
-- Name: appreciates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appreciates ALTER COLUMN id SET DEFAULT nextval('public.appreciates_id_seq'::regclass);


--
-- Name: cmts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cmts ALTER COLUMN id SET DEFAULT nextval('public.cmts_id_seq'::regclass);


--
-- Name: competencies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competencies ALTER COLUMN id SET DEFAULT nextval('public.competencies_id_seq'::regclass);


--
-- Name: downloads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.downloads ALTER COLUMN id SET DEFAULT nextval('public.downloads_id_seq'::regclass);


--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Name: lesson_plans id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_plans ALTER COLUMN id SET DEFAULT nextval('public.lesson_plans_id_seq'::regclass);


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: views id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.views ALTER COLUMN id SET DEFAULT nextval('public.views_id_seq'::regclass);


--
-- Data for Name: appreciates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.appreciates (id, uid, pid) FROM stdin;
\.


--
-- Data for Name: cmts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cmts (id, uid, pid, content, reply_to, created_time) FROM stdin;
\.


--
-- Data for Name: competencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.competencies (id, pid, core, sub, profile) FROM stdin;
102	48	Communication	Collaborating	1
103	48	Communication	Collaborating	1
104	49	Communication	Collaborating	1
105	49	Communication	Collaborating	1
106	\N	Communication	Collaborating	2
107	49	Communication	Collaborating	1
108	\N	Communication	Collaborating	2
109	\N	Communication	Collaborating	2
110	\N	Personal & Social	Social Awareness & Responsibility	4
111	\N	Thinking	Critical & Reflective Thinking	1
112	\N	Thinking	Critical & Reflective Thinking	1
113	\N	Thinking	Critical & Reflective Thinking	1
114	\N	Thinking	Critical & Reflective Thinking	3
115	\N	Thinking	Critical & Reflective Thinking	3
116	50	Thinking	Critical & Reflective Thinking	3
117	51	Communication	Collaborating	1
118	52	Communication	Collaborating	1
119	53	Communication	Collaborating	3
120	53	Communication	Collaborating	3
121	\N	Personal & Social	Social Awareness & Responsibility	3
122	54	Thinking	Critical & Reflective Thinking	2
123	54	Thinking	Critical & Reflective Thinking	2
124	55	Communication	Collaborating	2
125	55	Communication	Collaborating	2
126	55	Communication	Collaborating	2
127	56	Communication	Communicating	1
128	56	Communication	Communicating	1
129	56	Communication	Communicating	1
130	56	Communication	Communicating	1
131	56	Communication	Communicating	1
132	56	Communication	Communicating	1
133	\N	Communication	Collaborating	2
134	56	Communication	Communicating	1
135	\N	Communication	Collaborating	2
136	56	Communication	Communicating	1
137	\N	Communication	Collaborating	3
138	57	Communication	Collaborating	2
139	57	Communication	Collaborating	2
140	57	Communication	Collaborating	2
141	57	Communication	Collaborating	2
142	57	Communication	Collaborating	2
143	57	Communication	Collaborating	2
144	\N	Communication	Communicating	4
145	\N	Communication	Communicating	2
146	\N	Communication	Collaborating	2
147	\N	Communication	Collaborating	2
148	\N	Communication	Collaborating	2
149	\N	Communication	Collaborating	2
150	\N	Communication	Collaborating	1
151	\N	Personal & Social	Social Awareness & Responsibility	2
152	\N	Personal & Social	Positive Personal & Cultural Identity	1
153	\N	Communication	Collaborating	1
\.


--
-- Data for Name: downloads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.downloads (id, pid, uid) FROM stdin;
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (id, uid, pid, name, file_link) FROM stdin;
1	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
2	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
3	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
4	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
5	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
6	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
7	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
8	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
9	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
10	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
11	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
12	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
13	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
14	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
15	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
17	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
16	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
18	7YbSaZgoM2Pj8FBytfC2PWAZziL2	56	h	t
19	7YbSaZgoM2Pj8FBytfC2PWAZziL2	\N	h	t
20	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
21	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
22	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
23	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
24	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
25	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
26	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
28	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
27	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
29	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
30	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
31	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
32	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
33	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
34	7YbSaZgoM2Pj8FBytfC2PWAZziL2	57	h	t
\.


--
-- Data for Name: lesson_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_plans (id, uid, img, subject, grade, topic, description, instruction, is_public, is_draft, created_time, learning_objs, remarks) FROM stdin;
53	7YbSaZgoM2Pj8FBytfC2PWAZziL2		Computer Studies	10	Distinctions Between Software Types, Cloud-Based and Desktop Applications	description	ksdugcjhsdb	t	f	2019-11-24 22:52:07.865782		ddscsd
65	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2Fundefined?alt=media&token=1afc4ed8-6ba5-4db7-bb94-a68f4067191b	Culinary Arts	10	Safe Food Handling and Personal Safety	Tinhte	Kenh14	t	f	2019-11-25 11:00:27.82253		dsdsdsd
54	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2F54?alt=media&token=b13afbb1-6577-4f4b-ac91-8623072c19e9	Family and Society	10	Cultural Factors Used to Define the Term ΓÇ£FamilyΓÇ¥	Dung nen cco	cdcdc	t	f	2019-11-24 23:09:58.776535		cdcd
55	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2F55?alt=media&token=67b10e5e-bf88-472f-b1ad-b5342a1d6650	Creative Writing	10	Text Features and Structures: Narrative Structures Found in First Peoples Texts, Protocols Related to Ownership of First Peoples Oral Texts	xsxsx	swswsws	t	f	2019-11-24 23:27:11.390021		wswswsws
56	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2F56?alt=media&token=4975b06b-3975-4d73-a239-a11e8f1a3dcd	Computer Studies	10	Operating System Shortcuts, and Command Line Operations 	 DS ssd	dsdnsdsuidsh	t	f	2019-11-24 23:30:30.965703		sdnsjdsd
57	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2F57?alt=media&token=7829c0fd-7ba4-4703-afe9-e997d7c57b36	Computer Studies	10	Intermediate Features of Business Applications, Including Word Processing, Spreadsheets, and Presentations	dffdfe	fefefefef	t	f	2019-11-24 23:50:08.400171		fefefef
58	7YbSaZgoM2Pj8FBytfC2PWAZziL2		Computer Studies	10	Design Opportunities	dcscsc	scscsc	t	f	2019-11-25 00:04:07.679688		scscc
59	7YbSaZgoM2Pj8FBytfC2PWAZziL2		Culinary Arts	10	Culinary Best Practices	b very 	vghhgvhg	t	f	2019-11-25 00:07:25.408071		gvhgvhg
60	7YbSaZgoM2Pj8FBytfC2PWAZziL2		Computer Studies	10	Intermediate Features of Business Applications, Including Word Processing, Spreadsheets, and Presentations	xcdcsdcdsc	cdcdcdc	t	f	2019-11-25 00:10:49.46496		cdcdcdc
61	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2Fundefined?alt=media&token=a8962f3b-ba32-4585-92b8-b0b8a891fb3d	Culinary Arts	10	Food Service Tools and Equipment	dcsdcdcdc	dededed	t	f	2019-11-25 00:17:15.144703		deded
62	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2Fundefined?alt=media&token=9c370bfc-34a2-4b73-a84a-97058b35b334	Automotive Technology	11	Social, Legal, and Ethical Responsibilities Associated with Vehicle Operation	vssdcsc	deededed	t	f	2019-11-25 02:19:59.12933		eededed
63	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2Fundefined?alt=media&token=84868cec-51b8-4936-99e9-6a1c184e2dac	Automotive Technology	11	Lifting Equipment and Procedures	dedede	edededed	t	f	2019-11-25 02:21:15.281944		dededed
64	7YbSaZgoM2Pj8FBytfC2PWAZziL2	https://firebasestorage.googleapis.com/v0/b/teachsharek12.appspot.com/o/coverPhotos%2Fundefined?alt=media&token=ebcf2326-2e7b-4347-9e48-75c8798519f9	Automotive Technology	11	Use of Technical Information and Manuals for the Purpose of Diagnostics and Repair	dcsceed	rgrfrfrf	t	f	2019-11-25 02:22:17.8987		frfrfrf
\.


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.links (id, pid, link) FROM stdin;
32	53	gg.ca
33	53	gg.ca
34	54	cdcdc.cdc
35	54	cdcdc.cdc
36	55	xsx.swe
37	55	xsx.swe
38	55	xsx.swe
39	56	sdsdsd.dsd
40	56	sdsdsd.dsd
41	56	sdsdsd.dsd
42	56	sdsdsd.dsd
43	56	sdsdsd.dsd
44	56	sdsdsd.dsd
45	\N	ecewc.dw
46	56	sdsdsd.dsd
47	56	sdsdsd.dsd
48	\N	ecewc.dw
49	\N	csc.csc
50	57	fefe.dfdf
51	57	fefe.dfdf
52	57	fefe.dfdf
53	57	fefe.dfdf
54	57	fefe.dfdf
55	57	fefe.dfdf
56	\N	dcdcd.dsdw
57	\N	bv gj.hvg
58	\N	cdcdc.cdc
59	\N	eded.ded
60	\N	ceefe.de
61	\N	deded.eded
62	\N	dedede.grt
63	\N	google.ca
\.


--
-- Data for Name: views; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.views (id, uid, pid, created_time) FROM stdin;
\.


--
-- Name: appreciates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appreciates_id_seq', 1, false);


--
-- Name: cmts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cmts_id_seq', 1, false);


--
-- Name: competencies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.competencies_id_seq', 153, true);


--
-- Name: downloads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.downloads_id_seq', 1, false);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_id_seq', 34, true);


--
-- Name: lesson_plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lesson_plans_id_seq', 65, true);


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.links_id_seq', 63, true);


--
-- Name: views_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.views_id_seq', 1, false);


--
-- Name: appreciates appreciates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appreciates
    ADD CONSTRAINT appreciates_pkey PRIMARY KEY (id);


--
-- Name: cmts cmts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cmts
    ADD CONSTRAINT cmts_pkey PRIMARY KEY (id);


--
-- Name: competencies competencies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competencies
    ADD CONSTRAINT competencies_pkey PRIMARY KEY (id);


--
-- Name: downloads downloads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.downloads
    ADD CONSTRAINT downloads_pkey PRIMARY KEY (id);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: lesson_plans lesson_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_plans
    ADD CONSTRAINT lesson_plans_pkey PRIMARY KEY (id);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: views views_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.views
    ADD CONSTRAINT views_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

