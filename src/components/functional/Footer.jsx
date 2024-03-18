import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-app-container">
          <img src="/images/google-play.jpg" alt="logo" />
          <img src="/images/apps-store.jpg" alt="logo" />
        </div>
        <div className="footer-content-container">
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              rowGap: 1,
              width: "466px",
              m: 0.75,
              p: "0 12px",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: 24, m: "0 0 25px", lineHeight: "1.5" }}
            >
              You enjoy watching on TV
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: 16, m: "0 0 20px", textAlign: "left", mr: 10 }}
            >
              There are basically six key areas to higher achievement. Some
              people will tell you there are four while others may tell you
              there are eight.
            </Typography>
            <Box>
              <FacebookIcon
                sx={{
                  fontSize: "24px",
                  mr: 1,

                  "&:hover": {
                    color: "black",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: "24px",
                  mr: 1,

                  "&:hover": {
                    color: "black",
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: "24px",
                  mr: 1,

                  "&:hover": {
                    color: "black",
                  },
                }}
              />
              <InstagramIcon
                sx={{
                  fontSize: "24px",
                  mr: 1,

                  "&:hover": {
                    color: "black",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 1,
              width: { xs: "auto", lg: 209 },
            }}
          >
            <Typography variant="h4" sx={{ fontSize: 24 }}>
              Explore More
            </Typography>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Shows
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Movies
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Sports
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Live TV
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Premium
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 1,
              width: { xs: "auto", lg: 209 },
            }}
          >
            <Typography variant="h4">Company</Typography>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Advertise With Us
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                Contact US
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                FAQ
              </Typography>
            </Link>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: { xs: "auto", lg: 442 },
              }}
            >
              <Typography variant="h4" sx={{ fontSize: 24 }}>
                Shows & Movies by Genres
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 7,
                  justifyContent: "space-between",
                  fontSize: "16px",
                }}
              >
                <Box
                  sx={{
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    rowGap: 1,
                  }}
                >
                  <Link to="/">
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px !important",

                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Drama Shows
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px !important",

                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Comedy Shows
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px !important",

                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Animation
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px !important",

                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Reality Shows
                    </Typography>
                  </Link>
                  <Link to="/">
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px !important",

                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Romantic Shows
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Box
                    sx={{
                      alignItems: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      rowGap: 1,
                    }}
                  >
                    <Link to="/">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontSize: "16px !important",

                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        Action Movies
                      </Typography>
                    </Link>
                    <Link to="/">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontSize: "16px !important",

                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        Drama Movies
                      </Typography>
                    </Link>
                    <Link to="/">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontSize: "16px !important",

                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        Romantic Movies
                      </Typography>
                    </Link>
                    <Link to="/">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontSize: "16px !important",

                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        Comedy Movies
                      </Typography>
                    </Link>
                    <Link to="/">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontSize: "16px !important",

                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        Horror Movies
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
      <div className="footer-clients-container">
        <img src="/images/01.png" alt="logo" />
        <img src="/images/05.png" alt="logo" />
        <img src="/images/02.png" alt="logo" />
        <img src="/images/03.png" alt="logo" />
        <img src="/images/04.png" alt="logo" />
        <img src="/images/05.png" alt="logo" />
      </div>
      <div className="copyrights">
        <Typography variant="p">
          © Copyright 2024 4K Star All Rights Reserved
        </Typography>
      </div>
    </>
  );
};

export default Footer;
