import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Chip,
  Stack,
  Paper,
  Grid,
  Link,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';

const GithubFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUser = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);
    setRepos([]);

    try {
     
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const user = await userResponse.json();
      setUserData(user);

    
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (err) {
      setError(err.message || 'Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchUser();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <Box sx={{ p: 3 }}>
    
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          GitHub Finder
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Search for GitHub users and explore their profiles
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
          <Button
            variant="contained"
            onClick={searchUser}
            disabled={loading}
            sx={{ minWidth: 120 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Search'}
          </Button>
        </Stack>
      </Paper>

     
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

   
      {userData && (
        <>
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4}>
               
                <Grid item xs={12} md={4}>
                  <Stack alignItems="center" spacing={2}>
                    <Avatar
                      src={userData.avatar_url}
                      alt={userData.name}
                      sx={{ width: 200, height: 200 }}
                    />
                    <Typography variant="h5" fontWeight={700}>
                      {userData.name || userData.login}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      @{userData.login}
                    </Typography>
                    {userData.bio && (
                      <Typography variant="body2" textAlign="center" color="text.secondary">
                        {userData.bio}
                      </Typography>
                    )}
                    <Link href={userData.html_url} target="_blank" rel="noopener">
                      <Button variant="outlined" fullWidth>
                        View on GitHub
                      </Button>
                    </Link>
                  </Stack>
                </Grid>

                
                <Grid item xs={12} md={8}>
                  <Stack spacing={3}>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="h4" fontWeight={700} color="primary">
                            {userData.public_repos}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Repositories
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="h4" fontWeight={700} color="success.main">
                            {userData.followers}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Followers
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="h4" fontWeight={700} color="info.main">
                            {userData.following}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Following
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Divider />

                  
                    <Stack spacing={2}>
                      {userData.company && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <BusinessIcon fontSize="small" color="action" />
                          <Typography variant="body2">{userData.company}</Typography>
                        </Stack>
                      )}
                      {userData.location && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOnIcon fontSize="small" color="action" />
                          <Typography variant="body2">{userData.location}</Typography>
                        </Stack>
                      )}
                      {userData.blog && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LinkIcon fontSize="small" color="action" />
                          <Link href={userData.blog} target="_blank" rel="noopener">
                            <Typography variant="body2">{userData.blog}</Typography>
                          </Link>
                        </Stack>
                      )}
                      {userData.twitter_username && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <TwitterIcon fontSize="small" color="action" />
                          <Link href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener">
                            <Typography variant="body2">@{userData.twitter_username}</Typography>
                          </Link>
                        </Stack>
                      )}
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          Joined: {formatDate(userData.created_at)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

       
          {repos.length > 0 && (
            <>
              <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                Recent Repositories
              </Typography>
              <Grid container spacing={3}>
                {repos.map((repo) => (
                  <Grid item xs={12} md={6} key={repo.id}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Stack spacing={2}>
                          <Stack direction="row" alignItems="start" justifyContent="space-between">
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
                              <FolderIcon color="primary" />
                              <Link
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener"
                                underline="hover"
                              >
                                <Typography variant="h6" fontWeight={600}>
                                  {repo.name}
                                </Typography>
                              </Link>
                            </Stack>
                            {repo.private && (
                              <Chip label="Private" size="small" />
                            )}
                          </Stack>

                          {repo.description && (
                            <Typography variant="body2" color="text.secondary">
                              {repo.description}
                            </Typography>
                          )}

                          <Stack direction="row" spacing={2} flexWrap="wrap">
                            {repo.language && (
                              <Stack direction="row" spacing={0.5} alignItems="center">
                                <CodeIcon fontSize="small" color="action" />
                                <Typography variant="caption" color="text.secondary">
                                  {repo.language}
                                </Typography>
                              </Stack>
                            )}
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <StarIcon fontSize="small" color="action" />
                              <Typography variant="caption" color="text.secondary">
                                {repo.stargazers_count}
                              </Typography>
                            </Stack>
                            <Typography variant="caption" color="text.secondary">
                              Updated: {formatDate(repo.updated_at)}
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </>
      )}

      
      {!userData && !loading && !error && (
        <Paper sx={{ p: 8, textAlign: 'center' }}>
          <SearchIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Search for a GitHub User
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter a username above to view their profile and repositories
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default GithubFinder;

