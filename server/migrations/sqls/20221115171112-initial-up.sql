/* Replace with your SQL commands */
CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255),
    author character varying(255),
    image_link text,
    content text,
    date_added date DEFAULT CURRENT_DATE NOT NULL
);

CREATE TABLE public.messages (
    id integer NOT NULL,
    subject_line character varying(255),
    message text,
    email character varying(255),
    date_sent date DEFAULT CURRENT_DATE NOT NULL
);

INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (1, 'Sam Smith Set To Drop New Album', 'Hoppy Hopper', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');
INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (2, 'Rihanna Drops New Single, Finally!', 'Enzo Benzo', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');
INSERT INTO public.news (id, title, author, image_link, content, date_added) VALUES (3, 'CONFIRMED: Jusitn Beiber Will Be Perfoming at Takeoff Memorial Service', 'Tooti Frooti', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat. Tortor consequat id porta nibh venenatis cras sed felis eget. Amet massa vitae tortor condimentum lacinia quis vel. Id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum. Dui ut ornare lectus sit amet est placerat. Quis lectus nulla at volutpat diam ut venenatis. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae elementum curabitur vitae nunc. Magna eget est lorem ipsum dolor. Orci eu lobortis elementum nibh tellus molestie nunc non.', '2022-11-14');