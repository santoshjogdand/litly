import LinkComponent from '../components/LinkComponent'
import { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { Toaster, toast } from 'react-hot-toast';

function Links() {
  const [urls, setUrls] = useState(null);
  const [filteredUrls, setFilteredUrls] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    sortBy: 'newest',
    searchTerm: ''
  });

  const fetchUrls = async () => {
    const res = await axios.get('/urls');
    setUrls(res.data.data);
    setFilteredUrls(res.data.data);
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  // Apply filters and sorting whenever urls or filters change
  useEffect(() => {
    if (!urls) return;
    
    let filtered = [...urls];

    // Search filter
    if (filters.searchTerm) {
      filtered = filtered.filter(url => 
        url.title?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        url.customUrl?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        url.originalUrl?.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Date range filter
    if (filters.dateFrom) {
      filtered = filtered.filter(url => {
        const urlDate = new Date(url.createdAt || url.dateCreated);
        const fromDate = new Date(filters.dateFrom);
        return urlDate >= fromDate;
      });
    }

    if (filters.dateTo) {
      filtered = filtered.filter(url => {
        const urlDate = new Date(url.createdAt || url.dateCreated);
        const toDate = new Date(filters.dateTo);
        toDate.setHours(23, 59, 59, 999); // Include the entire day
        return urlDate <= toDate;
      });
    }

    // Sorting
    if (filters.sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt || b.dateCreated) - new Date(a.createdAt || a.dateCreated));
    } else if (filters.sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.createdAt || a.dateCreated) - new Date(b.createdAt || b.dateCreated));
    } else if (filters.sortBy === 'title') {
      filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (filters.sortBy === 'clicks') {
      filtered.sort((a, b) => (b.clicks || 0) - (a.clicks || 0));
    }

    setFilteredUrls(filtered);
  }, [urls, filters]);

  const deleteLink = async (linkId) => {
    console.log("Deleted", linkId)
    axios.delete(`/urls/${linkId}`).then((response) => {
      console.log(response.data.message)
      toast.success('Link deleted successfully!');
      setUrls((prev) => prev.filter((url) => url._id !== linkId))
    }).catch((error) => {
      toast.error('Failed to delete link.');
    })
  }

  const updateLink = async (id, updatedDetails) => {
    console.log("Updated", id)
    axios.put(`/urls/${id}`, {
      title: updatedDetails.title || false,
      customUrl: updatedDetails.customUrl || false,
      newDestUrl: updatedDetails.newDestUrl || false
    }).then((response) => {
      console.log(response.data.message)
      fetchUrls();
      toast.success('Link updated successfully!');
    }).catch((error) => {
      toast.error('Failed to update link.');
    })
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }

  const clearAllFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      sortBy: 'newest',
      searchTerm: ''
    });
    setShowFilters(false);
    document.getElementById('dateFilter').value = '';
  }

  const handleDateFilterChange = (e) => {
    const selectedDate = e.target.value;
    handleFilterChange('dateFrom', selectedDate);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='container overflow-auto z-10 h-full w-full lg:rounded-lg backdrop-blur-4xl p-8 lg:pt-8 lg:mb-8 md:pt-25 pt-12  flex flex-col justify-center gap-6'>
        <div className="headings">
          <h1 className='text-4xl font-semibold ' >Manage Links</h1>
          <p className='text-gray-700 ml-[2px]'>Manage all shortlinks here!</p>
        </div>
        
        <div className="options flex opacity-90 sm:justify-start gap-4 my-4 sm:w-[40%] w-full font-medium text-sm h-8 ">
          <input 
            type="date" 
            placeholder='Filter by date' 
            className='bg-white border border-gray-200 cursor-pointer rounded-lg sm:p-4 px-1 outline-none' 
            id='dateFilter'
            onChange={handleDateFilterChange}
          />
          <div 
            className='rounded-lg sm:p-4 px-2 flex bg-white border border-gray-200 max-w-30 items-center justify-center cursor-pointer' 
            id='filter'
            onClick={() => setShowFilters(!showFilters)}
          >
            Add filters
          </div>
          <div 
            className='rounded-lg max-w-30 sm:flex hidden items-center justify-center text-purple-600 cursor-pointer' 
            id='filter'
            onClick={clearAllFilters}
          >
            Clear all
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="filters-panel bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  placeholder="Search by title, URL..."
                  className="w-full p-2 border border-gray-200 rounded-lg outline-none text-sm"
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                />
              </div>

              {/* Date From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-200 rounded-lg outline-none text-sm"
                  value={filters.dateFrom}
                  onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                />
              </div>

              {/* Date To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-200 rounded-lg outline-none text-sm"
                  value={filters.dateTo}
                  onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  className="w-full p-2 border border-gray-200 rounded-lg outline-none text-sm"
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                  <option value="clicks">Most Clicks</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <hr className='opacity-20' />
        <LinkComponent updateLink={updateLink} deleteLink={deleteLink} urls={filteredUrls} />
      </div>
    </>
  )
}

export default Links